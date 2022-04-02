import '../styles/globals.css'

import { Worker } from "@react-pdf-viewer/core";



function MyApp({ Component, pageProps }) {
  return (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
 <Component {...pageProps} />

  </Worker>
 
  )}







export default MyApp
