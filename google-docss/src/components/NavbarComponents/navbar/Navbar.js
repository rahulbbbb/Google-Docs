import React from "react";
import home from "../../pages/Home/Home.module.css";
import { Icons } from "../../constData/Icons/Icons";
import { Tooltip } from "@mui/material";
import FontStyle from "../FontStyle/FontStyle";
import FontSize from "../FontSize/FontSize";
import HandleScale from "../handleScale/HandleScale";

import Heading from "../heading/Heading";
function Navbar({ printDiv }) {

  function handleIcons(icon) {
    document.execCommand(`${icon.action}`);
  }
 
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

                  onClick={() => handleIcons(icon)}
                  className={home.undoContainer}
                  

                >
                   {icon.icon}
                 
                </div>
              </Tooltip>
            </>
          ))}


          {Icons.slice(5).map((icon, index) => {
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


