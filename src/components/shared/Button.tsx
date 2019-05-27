import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ButtonProps from '../../constants/interfaces/ButtonProps';
import MarsRoverContext from 'context/mars-rover';
import './Button.scss';


function Button(props: ButtonProps): JSX.Element {
  const {
          children,
          func,
          type,
          value,
        } = props;

  const context = useContext(MarsRoverContext);
  const { rover, sol } = context.state;

  const handleClick = () => {
    const { name } = func;

    // Learning experience from this project: Passing functions
    // to a Button attribute with TypeScript can get messy.
    if(name === 'selectRover' && typeof value === 'string' && type) {
      func(type, value);
    } else if(name === 'fetchApi' && Array.isArray(value) && !type) {
      const [sol, rover, cam] = value;
        func(sol,rover, cam);
    }
  }

  const getButtonClass = (): string => {
    if(typeof value === 'string' && value === rover) {
      return ' c-Button--selected';
    } else if(children === 'Search') {

      if(!rover || !sol) {
        return ' c-Button--disabled';
      }

      return ' c-Button--search';
    }
    return '';
  }

  return (
    <button
      className={'c-Button' + getButtonClass()}
      onClick={handleClick}
      type="button"
      disabled={(!rover || !sol) && children === 'Search'}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: 'button',
  func: () => null,
  type: '',
  value: '',
}

Button.propTypes = {
  children: PropTypes.string,
  func: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
}

export default Button;
