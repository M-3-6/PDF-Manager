import { useState } from 'react';
import { PdfLoader, PdfHighlighter } from 'react-pdf-highlighter';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ShowFile = ({file, scale}) => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div>
			<nav className="pdf-navigation">
				<button onClick={goToPrevPage} disabled={pageNumber === 1}>Prev</button>
				<button onClick={goToNextPage} disabled={pageNumber === numPages}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>
            
            {/* <PdfLoader url={file} beforeLoad={<p>Loading...</p>} />
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument} 
            /> )} */}

			<Document
				file={file}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} scale={scale}/>
			</Document>
		</div>
	);
};

export default ShowFile;