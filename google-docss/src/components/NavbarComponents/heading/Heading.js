import React, { useState } from 'react'
import { headingList } from "../../constData/Icons/Icons";
import { Tooltip } from '@mui/material';
import style from '../FontStyle/FontStyle.module.css';

function Heading() {
  const [text, setText] = useState("Heading 3");

  const handleText = (value) => {
    setText(value);
    document.execCommand("formatBlock", false, value);
   
  };

  return (
    <div className={style.fontStyleBox}>
      <Tooltip title='Styles'>
        <select onChange={(e) => handleText(e.target.value)} className={style.fontStyle}>
          <option value="">{text}</option>
          {headingList.map((x, i) => (
            <option value={x.value} key={i}>
              {x.value}
            </option>
          ))}
        </select>
      </Tooltip>

    </div>
  )
}

export default Heading
