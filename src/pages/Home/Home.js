import React from "react";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import { useContext, useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";

export default function Home() {
  const { token, setToken } = useContext(AppContext);
  const [data, setData] = useState([]);

  async function GetData() {
    axios
      .get("http://localhost:8000/quotes", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        // console.log(res.data);
        setData(res.data.quotes);
      })
      .catch((err) => console.log);
  }
  window.onload = GetData();
  return (
    <>
      {data.map((quotes) => {
        return (
          <QuoteCard
            id={quotes.id}
            downvotesCount={quotes.downvotesCount}
            upvotesCount={quotes.upvotesCount}
            content={quotes.content}
            author={quotes.author}
          />
        );
      })}
    </>
  );
}
