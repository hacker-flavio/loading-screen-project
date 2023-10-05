import React, { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import MyLoadingScreen from "./components/MyLoadingScreen";
import Error from "./components/Error";
import EmptyPage from "./components/EmptyPage";

import axios from "axios";

function App() {
  const [isSearching, setIsSearching] = useState({ state: "loading" });
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const numberOfQuotes = 5; // Number of quotes you want to fetch
    const quotesArray = [];

    try {
      for (let i = 0; i < numberOfQuotes; i++) {
        const response = await axios.get("https://api.quotable.io/random");

        quotesArray.push(response.data);
      }

      setQuotes(quotesArray);
      setIsSearching({ state: "success" });
    } catch (error) {
      console.error(error);
      setIsSearching({ state: "error" });
    }
    console.log("rendering");
  };

  useEffect(() => {
    if (quotes.length === 0) {
      getQuotes();
    }
  }, [quotes]);

  return (
    <div className="App">
      <div style={{ width: "80%", margin: "0 auto", paddingTop: "35px" }}>
        <div>
          {isSearching?.state === "success" ? (
            <Homepage quotes={quotes} />
          ) : isSearching?.state === "loading" ? (
            <MyLoadingScreen />
          ) : isSearching?.state === "error" ? (
            <Error />
          ) : (
            <EmptyPage />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
