import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { useState } from "react";

function Moment() {
	const [numPages, setNumPages] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};
	return (
		<div>
			<Document file="/moments.pdf" onLoadSuccess={onDocumentLoadSuccess}>
				{Array.apply(null, Array(numPages))
					.map((x, i) => i + 1)
					.map((page) => (
						<Page pageNumber={page} />
					))}
			</Document>
			
		</div>
	);
}
export default Moment;
