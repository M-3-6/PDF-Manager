import React, { useState } from 'react';
import { PdfHighlighter } from 'react-pdf-highlighter';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';

const PdfHighlighterComponent = () => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [highlights, setHighlights] = useState([]);
  const [comment, setComment] = useState('');
  const [selectedHighlight, setSelectedHighlight] = useState(null);

//   const onPdfLoad = (pdf) => {
//     setPdfDoc(pdf);
//   };

//   const handleSavePdf = async () => {
//     if (!pdfDoc) {
//       return;
//     }

//     const modifiedPdfDoc = await addHighlightsToPdf(pdfDoc, highlights);

//     const pdfBytes = await modifiedPdfDoc.save();

//     const blob = new Blob([pdfBytes], { type: 'application/pdf' });
//     saveAs(blob, 'highlighted-pdf.pdf');
//   };

  const addHighlightsToPdf = async (pdfDoc, highlights) => {
    const copiedPdfDoc = await PDFDocument.load(await pdfDoc.save());

    const [firstPage] = copiedPdfDoc.getPages();

    for (const highlight of highlights) {
      const { position, content } = highlight;
      const { x, y, width, height } = position;

      const highlightAnnotation = firstPage.drawText(content);
      highlightAnnotation.setX(x);
      highlightAnnotation.setY(y - height);
      highlightAnnotation.setWidth(width);
      highlightAnnotation.setHeight(height);
      highlightAnnotation.setFontSize(12);
      highlightAnnotation.setFillColorRgb(255, 255, 0);

      firstPage.drawRectangle({
        x,
        y: y - height,
        width,
        height,
        borderColor: [255, 255, 0],
        borderWidth: 2,
      });
    }

    return copiedPdfDoc;
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (selectedHighlight) {
      setHighlights([...highlights, { ...selectedHighlight, comment }]);
      setComment('');
      setSelectedHighlight(null);
    }
  };

  return (
    <div>
      {/* <PdfLoader url="your-pdf-file.pdf"> */}
        {({ pdfDocument, pdfPage, canvas, getAndRenderTextLayer }) => (
          <PdfHighlighter
            pdfDocument={pdfDocument}
            pdfPage={pdfPage}
            canvas={canvas}
            textLayer={getAndRenderTextLayer()}
            enableAreaSelection={(highlight) => !!highlight}
            onSelectionFinished={(position, content) => {
              setHighlights([...highlights, { position, content }]);
            }}
          />
        )}
        <div>
            {console.log(comment)}
            <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add new comment"
            className='comment-textarea'
            // position= {position}
          />
          <button onClick={handleAddComment}>Add Comment</button>
           </div>
      {/* </PdfLoader> */}
      {/* <button onClick={handleSavePdf}>Save PDF with Highlights</button> */}
    </div>
  );
};

export default PdfHighlighterComponent;
