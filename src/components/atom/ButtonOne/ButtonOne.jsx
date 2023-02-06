import React from 'react'
import { Button } from 'react-bootstrap'
import "./css/ButtonOne.css"
const ButtonOne = ({text}) => {
  return (
    <Button className='button-normal'>{text}</Button>
  )
}

export default ButtonOne