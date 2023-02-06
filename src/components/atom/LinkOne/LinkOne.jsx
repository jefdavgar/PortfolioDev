import React from 'react'
import "./css/LinkOne.css"
const LinkOne = ({text}) => {
    return (
        <>
          <a className='link-one' href={`#${text.toLowerCase()}`}>{text}</a>
        </>
      /*In this example, we are using the "text" property to construct the value of the "href" 
    attribute in the link. We use the "toLowerCase()" function to convert the value of the "text"
    property to lowercase before using it in the "href". This way, if the value of "text" is "Home",
    the link will point to "#home".*/
    )
  }
export default LinkOne