import React, { useState } from 'react'
import { headingList } from "../../constData/Icons/Icons";
import { Tooltip } from '@mui/material';
import style from '../FontStyle/FontStyle.module.css';

function Heading() {
  const [text, setText] = useState("Heading 3");

  const handleText = (value) => {
    setText(value);
    document.execCommand("formatBlock", false, value);
    //     const selection = window.getSelection();
    //   if (selection.rangeCount > 0) {
    //     const range = selection.getRangeAt(0);
    //     const selectedText = range.toString();
    //     const span = document.createElement("span");
    //     span.innerHTML = selectedText;
    //     range.deleteContents();
    //     range.insertNode(span);
    //     document.execCommand("formatBlock", false, value);
  };

  return (
    <div className={style.fontStyleBox}>
      <Tooltip title='Styles'>
        <select onChange={(e) => handleText(e.target.value)} className={style.fontStyle}>
          <option value="">{text}</option>
          {headingList.map((x, i) => (
            <option value={x.value} key={i}>
              {x.icon}
            </option>
          ))}
        </select>
      </Tooltip>

    </div>
  )
}

export default Heading
