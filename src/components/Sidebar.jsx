import React from "react";
import AddComment from "./AddComment";
import ViewComment from "./ViewComment";
import Edit from "./Edit";
import Share from "./ShareFile";

const Sidebar = () => {
    return (
        <div>
            <Share />
            <AddComment />
            <ViewComment />
            <Edit />
        </div>
    )
}

export default Sidebar;