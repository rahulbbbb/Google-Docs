import React from 'react'
import style from "./menuBar.module.css"
import { Tooltip } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';

import { useRecoilState } from "recoil";
import { documentName } from '../recoil/Atom';


const MenuBar = () => {
 
    const [docName,setDocName]=useRecoilState(documentName)


    return (
        <div className={style.menuBarContainer}>
            <div className={style.menuBar}>
                <Tooltip title="Docs home">
                    <h1><DescriptionIcon sx={{ color: '#4285F4', fontSize: "2rem" }} /></h1>
                </Tooltip>

                <div className={style.menuBarContent}>
                    <div className={style.menuBarContentTop}>
                        <input type="text"
                            value={docName}
                            onChange={(e) => setDocName(e.target.value)} />
                       
                    </div>

                    <div className={style.menuBarContentBottom}>
                        <h5>File </h5>
                        <h5>Edit </h5>
                        <h5>View </h5>
                        <h5>Insert </h5>

                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default MenuBar
