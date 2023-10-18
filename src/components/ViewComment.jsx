import React, {useState} from "react";
import { VscCommentUnresolved } from "react-icons/vsc";
import Drawer from 'react-modern-drawer';
import { CommentSection } from "./CommentSection";

function ViewComment() {
    const [isLeftOpen, setIsLeftOpen] = useState(false);

    const [enableOverlay, setEnableOverlay] = useState(true)

    const toggleLeft = () => {
        setIsLeftOpen((prev) => !prev)
    }
      
    return (
        <div>
        <button className="comment-button-2"  onClick={toggleLeft}>
            <VscCommentUnresolved className="share-icon" size={25}/>
        </button>
        <Drawer
          open={isLeftOpen}
          onClose={toggleLeft}
          direction='left'
          size={300}
          enableOverlay={enableOverlay}
        >
          <CommentSection />
        </Drawer>
        </div>
    )
}

export default ViewComment;