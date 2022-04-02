

import {Worker} from '@react-pdf-viewer/core'
import {Viewer} from '@react-pdf-viewer/core'
 import "@react-pdf-viewer/core/lib/styles/index.css";

function Frame() {
return (
		<div
		style={{height:"750px"}}>

<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
<Viewer 
text="i love you doc"
fileUrl="/bendingsRevision.pdf"/>
</Worker>
	</div>
	);
}
export default Frame;




