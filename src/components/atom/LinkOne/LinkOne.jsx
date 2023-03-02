import React from 'react'
import "./css/LinkOne.css"
import { useState, useEffect } from 'react';
const LinkOne = ({text}) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
    return (
        <>
          <a className={scroll ? "color-black" : "link-one"} href={`#${text.toLowerCase()}`}>{text}</a>
        </>
      /*In this example, we are using the "text" property to construct the value of the "href" 
    attribute in the link. We use the "toLowerCase()" function to convert the value of the "text"
    property to lowercase before using it in the "href". This way, if the value of "text" is "Home",
    the link will point to "#home".*/
    )
  }
export default LinkOne