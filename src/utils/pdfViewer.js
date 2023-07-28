import React from "react"
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./pdf";

function PdfViewer() {
    return (
        <center>
           <PDFViewer>
            <MyDocument/>
        </PDFViewer>
        </center>
        
    )
}

export default PdfViewer