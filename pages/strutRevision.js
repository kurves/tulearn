import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import en_US from "@react-pdf-viewer/locales/lib/en_US.json";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function Frame() {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<div style={{ height: "750px", width: "100%" }}>
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
				<Viewer
					fileUrl="/strutsRevision.pdf"
					localization={en_US}
					plugins={[defaultLayoutPluginInstance]}
				/>
			</Worker>
		</div>
	);
}
export default Frame;
