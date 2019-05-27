import React from 'react';
import PropTypes from 'prop-types';
import ButtonProps from '../../constants/interfaces/ButtonProps';
import './Button.scss';

function Button(props: ButtonProps): JSX.Element {
  const {
          btnClass,
          children,
          disabled,
          onClick,
        } = props;

  return (
    <button
      className={'c-Button ' + btnClass + (disabled ? ' c-Button--disabled' : '')}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  btnClass: '',
  children: 'button',
  onClick: () => null,
  disabled: false,
}

Button.propTypes = {
  btnClass: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button;
