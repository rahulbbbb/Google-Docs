import React, { useState } from "react";
import home from "../../pages/Home/Home.module.css";
import { Icons } from "../../constData/Icons/Icons";
import { Tooltip } from "@mui/material";

import FontStyle from "../FontStyle/FontStyle";
import FontSize from "../FontSize/FontSize";
import HandleScale from "../handleScale/HandleScale";

import Heading from "../heading/Heading";
function Navbar({ printDiv }) {
  const [click, setClick]=useState(false)
  const [activeIcon, setActiveIcon]= useState(null)
  function handleIcons(icon, index) {
    if(index>1){
      setClick(!click)
      setActiveIcon(index)
    }
    
    document.execCommand(`${icon.action}`);
  }
  const icons = document.querySelectorAll('.icon');

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      icons.forEach(otherIcon => {
        otherIcon.classList.remove('active');
      });
      icon.classList.add('active');
    });
  });
  
  return (
    <>
      <div className={home.mainNav}>
        <div className={home.navContainer}>
          <HandleScale printDiv={printDiv} />

          <Heading />
          <FontStyle />
          <FontSize />
          {Icons.slice(0, 5).map((icon, index) => (
            <>
              <Tooltip title={icon.text} key={index}>
                <div

                  onClick={() => handleIcons(icon, index)}
                  className={`${home.undoContainer} ${click? (activeIcon===index ? home.active : null): null}`}
                  title="undo"

                >
                   {icon.icon}
                 
                </div>
              </Tooltip>
            </>
          ))}


          {Icons.slice(6).map((icon, index) => {
            return (
              <>
                <Tooltip title={icon.text} key={index}>
                  <div
                    onClick={() => handleIcons(icon)}
                    className={home.undoContainer}
                    title="undo"
                  >
                    {icon.icon}
                  </div>
                </Tooltip>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
