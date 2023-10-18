import React from "react";
import { IoIosShareAlt } from "react-icons/io";

const Share = () => {
    return (
        <button className="share-button">
            <IoIosShareAlt className="share-icon" size={35}/>
            {/* <p className="share-text">Share</p> */}
        </button>
    );
    
}

export default Share;