import React from 'react';
import ButtonProps from 'constants/interfaces/ButtonProps';

function Button(props: ButtonProps) {
  const { fx, label } = props;
  return (
    <>
      <button type="button">
        {label}
      </button>
    </>
  )
}

export default Button;
