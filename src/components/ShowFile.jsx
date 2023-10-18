// import { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// const ShowFile = ({file, scale}) => {
// 	const [numPages, setNumPages] = useState(null);
// 	const [pageNumber, setPageNumber] = useState(1);

// 	const onDocumentLoadSuccess = ({ numPages }) => {
// 		setNumPages(numPages);
// 	};

// 	const goToPrevPage = () =>
// 		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// 	const goToNextPage = () =>
// 		setPageNumber(
// 			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
// 		);

// 	return (
// 		<div>
// 			<nav className="pdf-navigation">
// 				<button onClick={goToPrevPage} disabled={pageNumber === 1}>Prev</button>
// 				<button onClick={goToNextPage} disabled={pageNumber === numPages}>Next</button>
// 				<p>
// 					Page {pageNumber} of {numPages}
// 				</p>
// 			</nav>

// 			<Document
// 				file={file}
// 				onLoadSuccess={onDocumentLoadSuccess}
// 			>
// 				<Page pageNumber={pageNumber} scale={scale}/>
// 			</Document>
// 		</div>
// 	);
// };

// // thalkalathek
// // const ShowFile=()=>{
// // 	return<></
// // }

// export default ShowFile;