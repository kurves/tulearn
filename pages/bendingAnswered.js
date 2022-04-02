

import {Worker} from '@react-pdf-viewer/core'
import { LocalizationMap,Viewer} from '@react-pdf-viewer/core'
 import "@react-pdf-viewer/core/lib/styles/index.css";

import en_US from "@react-pdf-viewer/locales/lib/en_US.json";




function Frame() {
return (
		<div
		style={{height:"750px"}}>

<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
<Viewer 

fileUrl="/bendingsAnswered.pdf"
 localization={en_US}
/>
</Worker>
	</div>
	);
}
export default Frame;