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
  givenVote,
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
  var [upvotecount, setupvotecount] = useState(false);
  var [downvoteCount, setDownvoteCount] = useState(false);
  setupvotecount(upvotesCount);
  setDownvoteCount(downvotesCount);
  const handleClick = () => {
    console.log(givenVote);
    if (givenVote === "upvote") {
      axios.delete(`http://localhost:8000/quotes/${id}/upvote`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      axios.post(
        `http://localhost:8000/quotes/${id}/upvote`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // setupvotecount(upvotecount+1)
    }
    setActive(!active);
  };
  const handleClickk = () => {
    console.log(givenVote);
    if (givenVote === "downvote") {
      axios.delete(`http://localhost:8000/quotes/${id}/downvote`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      downvotesCount -= 1;
    } else {
      axios.post(
        `http://localhost:8000/quotes/${id}/downvote`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      downvotesCount += 1;
    }
    setActivedown(!activedown);
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
            {Math.round((upvotecount / (upvotecount + downvoteCount)) * 100)}%
          </h5>
          <h4 className="updown">
            {upvotecount}/{downvoteCount}
          </h4>
          <FontAwesomeIcon
            // style={{ color: "grey" }}
            icon="fa-solid fa-caret-down"
            onClick={handleClickk}
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
