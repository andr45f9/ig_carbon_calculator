import React from "react";
import InfoArticle from "./InfoArticle";

function InfoSection() {
  return (
    <section className="InfoSection">
      <h2>The hidden cost of using Instagram </h2>
      <InfoArticle></InfoArticle>
      <div className="ButtonWrapper">
        <button className="SquareButton">Read More</button>
      </div>
    </section>
  );
}

export default InfoSection;
