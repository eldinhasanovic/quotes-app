import React from "react";
import "./QuoteCard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function QuoteCard({
  content,
  author,
  upvotesCount,
  downvotesCount,
}) {
  function Vote() {
    // const a = document.getElementsByTagName(FontAwesomeIcon);
    // if (a.style.color == "grey") {
    //   upvotesCount++;
    //     a.style.color == "white";
    // }
  }
  library.add(faCaretDown, faCaretUp);
  return (
    <>
      <div className="QuoteCard">
        <div className="rating">
          <FontAwesomeIcon
            style={{ color: "grey" }}
            icon="fa-solid fa-caret-up"
          />
          <h5 className="rating">
            {Math.round((upvotesCount / (upvotesCount + downvotesCount)) * 100)}
            %
          </h5>
          <h4 className="updown">
            {upvotesCount}/{downvotesCount}
          </h4>
          <FontAwesomeIcon
            style={{ color: "grey" }}
            icon="fa-solid fa-caret-down"
          />{" "}
        </div>
        <div className="quote">
          <h3 className="content">{content}</h3>
          <h5 className="author">{author}</h5>
        </div>
      </div>
    </>
  );
}
