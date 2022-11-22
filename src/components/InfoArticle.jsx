import React from "react";

function InfoArticle() {
  return (
    <div className="InfoContainer">
      <article>
        <img src="./src/img/info_cloud1.webp" alt="A gradient cloud illustration" />
        <p>Have you ever wondered what the environmental cost of a post, a story, watching a live or Instagram feed could be?</p>
      </article>

      <article>
        <img src="./src/img/info_cloud2.webp" alt="A gradient cloud illustration" />
        <p>The application launched in 2010 and has 1 billion monthly active users including 28 million unique visitors per month. Instagram is the most frequented social network behind Facebook.</p>
      </article>

      <article>
        <img src="./src/img/info_cloud3.webp" alt="A gradient cloud illustration" />
        <p>On average and per day, the carbon impact of a user on Instagram is 18.6 gEqCO2, or the equivalent of 166 meters traveled by a light vehicle.</p>
      </article>
    </div>
  );
}

export default InfoArticle;
