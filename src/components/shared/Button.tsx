import React from 'react';
import ButtonProps from 'constants/interfaces/ButtonProps';

function Button(props: ButtonProps): JSX.Element {
  const {
          children,
          func,
          type,
          value,
        } = props;

  const handleClick = () => {
    const { name } = func;


    // Learning experience from this project: Passing functions
    // to a Button attribute with TS can get messy.
    if(name === 'handleClick' && typeof value === 'string' && type) {
      func(type, value);
    } else if(name === 'marsRoverData' && Array.isArray(value) && !type) {
      const [sol, rover] = value;
        func(sol,rover);
    }
  }

  return (
    <button
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button;
