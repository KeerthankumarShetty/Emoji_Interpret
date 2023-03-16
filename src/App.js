import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "Smiling",
  "😠": "Sad",
  "💗": "Love",
  "😑": "Annoyance",
  "😉": "Wink"
};

// console.log(Object.keys(emojiDictionary)); Prints dictionary as array
var emojisweknow = Object.keys(emojiDictionary);
//var emojisweknow= object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState(" ");
  var [LikeCounter, setLikeCounter] = useState(0);

  function LikeCounterHandler() {
    if (LikeCounter === 0) {
      setLikeCounter(LikeCounter + 1);
    } else if (LikeCounter === 1) {
      setLikeCounter(LikeCounter - 1);
    }
  }

  function EmojiChangeHander(event) {
    var userinput = event.target.value;

    if (userinput in emojiDictionary) {
      meaning = emojiDictionary[userinput];
    } else {
      meaning = "We dont have this emoji in our dictionary";
    }
    setmeaning(meaning);
  }

  function emojiclickHandler(emoji) {
    console.log(emoji);
    var emojimeaning = emojiDictionary[emoji];
    setmeaning(emojimeaning);
  }

  return (
    <div className="App">
      <h1>Inside outt!!</h1>
      <input placeholder="Enter an emoji" onChange={EmojiChangeHander} />

      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        );
      })}
      <h2>Please drop us a 💗 if you love this app</h2>
      <button onClick={LikeCounterHandler}>💗{LikeCounter}</button>
    </div>
  );
}

//useState is a function which return array of 2 elements
//Style tag will take object instead of ""
//class =className as "class" is  a default element
//View ==>interract ==>event handler ==> Render
