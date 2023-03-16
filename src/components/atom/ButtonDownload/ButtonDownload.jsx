import React from 'react'
import { Button } from 'react-bootstrap'
import "./css/ButtonDownload.css"

const ButtonDownload = ({ text, link }) => {
  return (
    <a href={link} download>
      <Button className='button-normal'>{text}</Button>
    </a>
  )
}

export default ButtonDownload
