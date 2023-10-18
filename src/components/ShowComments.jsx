import React from "react";
// import { IHighlight } from "react-pdf-highlighter";

const updateHash = (highlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

const ShowComments = ({highlights}) => {
  return (
    <div className="sidebar" style={{ width: "25vw" }}>

      <ul className="sidebar__highlights">
        {highlights && highlights.map((highlight, index) => (
          <li
            key={index}
            className="sidebar__highlight"
            onClick={() => {
              updateHash(highlight);
            }}
          >
            <div>
              <strong>{highlight.comment.text}</strong>
              {highlight.content.text ? (
                <blockquote style={{ marginTop: "0.5rem" }}>
                  {`${highlight.content.text.slice(0, 90).trim()}…`}
                </blockquote>
              ) : null}
            </div>
            <div className="highlight__location">
              Page {highlight.position.pageNumber}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowComments;