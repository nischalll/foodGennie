import React, { useState } from "react";
import biryaniImage from "../images/chickenBiryani.jpg";

export default function WhatToEat() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [count, setCount] = useState(0);
  function displayFood() {
    setIsDisplayed(false);
    setCount(count=>count=count+1);
    console.log(count);
  
  }

  return (
    <div className="container what-to-eat mt-2">
      {!isDisplayed && (
        <div className="continer mb-2">
          <h1>Todays Pick is</h1>
          <h1 style={{color:"#7f6b00"}}>Biriyani</h1>
          <img className="biryani-img" src={biryaniImage}></img>
        </div>
      )}
      {
        count>=3? <p>you clicked {count} times now looks like you dont wanna eat biryani but i'm gonna force my way through you</p>:""
      }
      {isDisplayed && (
        <article className="continer mb-2">
          <h1>Why Choosing What to Eat is so Difficult?</h1>
          <p>
            I’ve been there. You’ve been there. We’ve all been there at some
            point or another. Picture this: It’s lunchtime at your office. You
            look up from your work to see if anyone else is about to make a move
            for lunch. A handful of regular lunch buddies get up and you decide
            to go along with them. As you all gather by the lobby waiting for
            the elevator to arrive, one of you throws out the question that
            leaves everyone in a cold sweat: “So what’s for lunch?” or “Where do
            we eat?” Everyone stands in silence, waiting for some else to answer
            but everyone is busy thinking, or at least faking it. This is the
            main purpose for creating this app with this very helpful app no one
            has to overthink about there food and can simply enjoy there life
            with our pre-decided handpicked menu.
          </p>
          <p>
            <b>Click on the button below to generete your Menu totally free</b>
          </p>
        </article>
      )}
      <button onClick={displayFood} className="btn btn-primary m-2">
        {isDisplayed?"Ultimate Food Button": "Retry"}
      </button>
    </div>
  );
}
