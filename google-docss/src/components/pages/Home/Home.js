import MenuBar from '../../menubar/MenuBar'
import Navbar from '../../NavbarComponents/navbar/Navbar'
import { useRef } from "react";
import style from "./Home.module.css";
import { HiDownload } from "react-icons/hi";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRecoilValue } from "recoil";
import { documentName } from "../../recoil/Atom";
import { Tooltip } from "@mui/material";

function Home() {
  const printDiv = useRef();
  const title = useRecoilValue(documentName);

  async function handleDownload() {
    const sheetContent = document.getElementById(`print`);
    const width = sheetContent.offsetWidth;
    const height = sheetContent.offsetHeight;
    const canvas = await html2canvas(sheetContent, { dpi: 300, width, height });
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const imgWidth = 210;
    const imgHeight = (height * imgWidth) / width;
    pdfDoc.addImage(imageData, "PNG", 0, 0, imgWidth, imgHeight, "", "FAST");
    pdfDoc.save(`${title}.pdf`);
  }



  return (
    <>
      <MenuBar />
      <Navbar printDiv={printDiv} />
      <div className={style.contentContainer}>
        <div
          ref={printDiv}
          id="print"
          className={style.box}
          contentEditable="true"
        ></div>
        <Tooltip title='Download'>
        <div onClick={handleDownload} className={style.downloaddoc}>
          <HiDownload />
        </div>
        </Tooltip>
        
      </div>
    </>
  );
}

export default Home;