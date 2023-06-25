
import style from './FontSize.module.css';
import Divider from '@mui/material/Divider';
import { ImFontSize } from "react-icons/im";
import { Tooltip } from '@mui/material';
import { useState } from 'react';


function FontSize() {
    let [fontSize, setFonstSize] = useState(3)
    const fontSizeList = [1, 2, 3, 4, 5, 6, 7];
    const handleFontSize = (e) => {
        setFonstSize(e.target.value);
        document.execCommand("fontSize", false, e.target.value);
        console.log(e.target.value);
    }
    return (
        <>

            <div className={style.sizeContainer}>
                <Tooltip title='Font size'>
                    <div className={style.container}>
                        <ImFontSize className={style.fontIcon} />
                    </div>

                </Tooltip>

                <div className={style.fontList}>
                    <Tooltip title='Font size'>
                        <select id="fontSize" className={style.fontSelect} onChange={handleFontSize}>
                            <option className={style.size}>{fontSize}</option>
                            {fontSizeList.map((x) => (
                                <option key={x} className={style.size}>{x}</option>
                            ))}
                        </select>
                    </Tooltip>
                </div>


            </div>
            <div >
                <Divider orientation="vertical" variant="middle" sx={{ height: "65%", gap: '0.2rem' }} />
            </div>


        </>
    )
}

export default FontSize;