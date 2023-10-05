import React, { useEffect } from "react";
import "./Homepage.css";

function Homepage({ quotes }) {
  useEffect(() => {
    console.log(quotes);
  }, [quotes]);

  return (
    <div>
      {quotes &&
        quotes.map((quote) => {
          return <div className="myQuote">{quote.content}</div>;
        })}
    </div>
  );
}

export default Homepage;
