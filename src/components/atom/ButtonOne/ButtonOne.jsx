import React from 'react'
import { Button } from 'react-bootstrap'
import "./css/ButtonOne.css"

const ButtonOne = ({text, linkTo}) => {
  const redirectTo = () => {
    window.location.href = linkTo;
  };

  return (
    <Button className='button-normal' onClick={redirectTo}>
      {text}
    </Button>
  );
}

export default ButtonOne
