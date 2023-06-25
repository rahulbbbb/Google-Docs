import fontStyle from './FontStyle.module.css';
import Divider from '@mui/material/Divider';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

function FontStyle() {
  let [fontName, setFontName] = useState("serif")
  const fontFamilyList = [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
    "Georgia",
    "Times New Roman",
    "Impact",
  ];

  const handleFontStyle = (e) => {
    setFontName(e.target.value);
    document.execCommand("fontName", false, e.target.value);
    console.log(e.target.value);
  }
  return (
    <>

      <div className={fontStyle.fontStyleBox}>
        <Tooltip title='Font style'>
          <select
            className={fontStyle.fontStyle}
            id="fontStyle"
            onChange={handleFontStyle}
          >
            <option>{fontName}</option>
            {fontFamilyList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>

        </Tooltip>

      </div>
      <div >
        <Divider orientation="vertical" variant="middle" sx={{ height: "65%", gap: '0.2rem' }} />
      </div>


    </>
  )
}

export default FontStyle;