import * as React from 'react'

import {Worker,Viewer} from '@react-pdf-viewer/core'

 import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";



import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function Frame() {

	const defaultLayoutPluginInstance = defaultLayoutPlugin();


return (
	<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/legacy/build/pdf.worker.js">
		<div style={{ height: "750px", width: "100%" }}>
			<Viewer
				fileUrl="/bendingsNotes.pdf"
				plugins={[defaultLayoutPluginInstance]}
			/>
		</div>
	</Worker>
);
}
export default Frame;




