import "../styles/globals.css";

import {  Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


import * as pdfjs from "pdfjs-dist/legacy/build/pdf.js";



function MyApp({ Component, pageProps }) {
	return (
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/legacy/build/pdf.worker.js">
			<Component {...pageProps} />
			</Worker>
	);
}

export default MyApp;
