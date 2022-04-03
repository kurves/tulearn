import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import en_US from "@react-pdf-viewer/locales/lib/en_US.json";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function Frame() {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
			<div style={{ height: "750px", width: "100%" }}>
				<Viewer
					fileUrl="/bendingsNotes.pdf"
					locale={en_US}
					plugins={[defaultLayoutPluginInstance]}
				/>
			</div>
		</Worker>
	);
}
export default Frame;
