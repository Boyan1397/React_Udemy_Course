import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StartRating";

import { useState } from "react";

function Text(params) {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="green"
        maxRating={10}
        onSetMovieRating={setMovieRating}
      />
      <p>This movie has {movieRating} rating by IMDB!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating="nnns"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      color="red"
      size={24}
      maxRating={5}
      className="test"
      defaultRating={3}
    />
    <Text />
  </React.StrictMode>
);
