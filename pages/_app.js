import "../styles/globals.css";
import {Worker} from '@react-pdf-viewer/core'
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";




function MyApp({ Component, pageProps }) {
	return (
		
			<Component {...pageProps} />

	);
}

export default MyApp;
