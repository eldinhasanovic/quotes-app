import React from "react";
import "./QuoteCard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";

export default function QuoteCard({
  content,
  author,
  upvotesCount,
  downvotesCount,
  id,
}) {
  const { token, setToken } = useContext(AppContext);

  library.add(faCaretDown, faCaretUp);
  // async function UpVote(id) {
  //   var x = true;
  //   if ((x = true)) {
  //     axios.post(`https://localhost:8000/quotes/:${id}/upvote`);
  //     x = false;
  //   } else {
  //     axios.delete(`https://localhost:8000/quotes/:${id}/upvote`);
  //   }
  // }
  // async function DownVote(id) {
  //   var x = true;
  //   if ((x = true)) {
  //     axios.post(`https://localhost:8000/quotes/:${id}/downvote`);
  //     x = false;
  //   } else {
  //     axios.delete(`https://localhost:8000/quotes/:${id}/downvote`);
  //   }
  // }
  var [active, setActive] = useState(false);
  var [activedown, setActivedown] = useState(false);
  const handleClick = () => {
    axios.post(
      `http://localhost:8000/quotes/${id}/upvote`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setActive(!active);
  };
  return (
    <>
      <div className="QuoteCard">
        <div className="rating">
          <FontAwesomeIcon
            // style={{ color: "grey" }}
            icon="fa-solid fa-caret-up"
            onClick={handleClick}
            style={{ color: active ? "green" : "grey" }}
          />
          <h5 className="rating">
            {Math.round((upvotesCount / (upvotesCount + downvotesCount)) * 100)}
            %
          </h5>
          <h4 className="updown">
            {upvotesCount}/{downvotesCount}
          </h4>
          <FontAwesomeIcon
            // style={{ color: "grey" }}
            icon="fa-solid fa-caret-down"
            // onClick={handleClickk}
            style={{
              color: activedown ? "red" : "grey",
            }}
          />{" "}
        </div>
        <div className="quote">
          <h4 className="content">{content}</h4>
          <h6 className="author">{author}</h6>
        </div>
      </div>
    </>
  );
}
