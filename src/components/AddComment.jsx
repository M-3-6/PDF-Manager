import React, {useState} from "react";
import { BiCommentAdd } from "react-icons/bi";
import { PdfLoader, PdfHighlighter } from 'react-pdf-highlighter';
import { PDFDocument } from 'pdf-lib';
// import Publish from "./PublishComments";

function AddComment() {
    const [addCommentVisible, setAddCommentVisible] = useState(false);

  
    const showAddComment = () => {
      setAddCommentVisible(true);
    };
      
    return (
        <div>
        <button className="comment-button" onClick={showAddComment}>
            <BiCommentAdd className="share-icon" size={25}/>
        </button>
        </div>
    )
}

export default AddComment;