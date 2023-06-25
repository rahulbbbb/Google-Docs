import React, { useState } from 'react'
import {  ImTextColor } from "react-icons/im";
import { Tooltip } from '@mui/material';
import style from '../FontStyle/FontStyle.module.css';

function FontColor() {
    const [color, setColor] = useState("#000000");
    const handleFontColor = (e) => {
        setColor(e.target.value);
        console.log(e.target.value);
        document.execCommand("foreColor", false, e.target.value);
      };
  return (
    <div>
      <Tooltip title='Font color'>
      <button style={{border:'transparent'}} className={style.fontStyle}>
            <label htmlFor="color">
              <ImTextColor style={{ color: color }} />
            </label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={handleFontColor}
            />
          </button>
      </Tooltip>
      
    </div>
  )
}

export default FontColor
