import React, { useState } from "react";

function Form() {
  const [minutes, setMinutes] = useState("");
  const [carbonUsed, setCarbonUsed] = useState("");

  function handleChange(event) {
    setMinutes(event.target.value);
    setCarbonUsed("");
  }

  function calculate() {
    let total;
    total = minutes * 1.55;
    setCarbonUsed(total);
  }

  return (
    <>
      <div className="Wrapper">
        <input className="InputField" type="number" id="minutes" name="minutes" onChange={handleChange} value={minutes} placeholder="Type how many minutes" autoComplete="off" />
        <button className="SquareButton" onClick={calculate} disabled={minutes === ""}>
          Calculate
        </button>
      </div>
      {carbonUsed && minutes > 0 && (
        <div className="ResultWrapper">
          <h4>Your carbon impact is:</h4>
          <h4>
            <b>{carbonUsed}</b> grams CO2e per day
          </h4>
          {minutes < 10 && <h5 className="WarningLevelOne">Fact: All I can say is.. You are doing well! Thank you for being nice to the enviroment by scrolling so little on Instagram. This amount is equivalent to drinking half a glass of wine🍷</h5>}
          {minutes >= 10 && minutes < 20 && <h5 className="WarningLevelOne">Fact: Well not bad! You know how to spend your time wisely. This amount is equivalent to drinking a can of coke or a glass of almond milk🥛 </h5>}
          {minutes >= 20 && minutes < 30 && (
            <h5 className="WarningLevelTwo">
              Fact: Hey! it's okay. Somethimes scrolling on Instagarm gives you a break form reality. But let's try doing something else next time. This amount is equivalent to either drinking a glass of oat or soy milk🥛 OR drinking a can of beer🍺.
            </h5>
          )}
          {minutes >= 30 && minutes < 40 && (
            <h5 className="WarningLevelTwo">Fact: Could have been worse. But hey! Let's "scroll" through your picture album next time!. This amount is equivalent to drinking a glass of rice milk🥛 or a cup of coffee☕️</h5>
          )}
          {minutes >= 40 && minutes < 50 && (
            <h5 className="WarningLevelThree">Fact: Okay! not too bad but it definitely could have been better, am I right?!. This amount is equivalent to eating 100 grams of potatoes🥔 or eating an average sized orange🍊</h5>
          )}
          {minutes >= 50 && minutes < 60 && (
            <h5 className="WarningLevelThree">Fact: Okay! not too bad but it definitely could have been better, am I right?!. This amount is equivalent to eating 100 grams of mixed nuts🥜 or eating an average sized apple🍎</h5>
          )}
          {minutes >= 60 && minutes < 120 && (
            <h5 className="WarningLevelFour">Fact: Hmmm... I'm sorry but I'm a bit disappointed in you. Let's go do something else my friend. This amount is equivalent to eating 50 grams of dark chocolate🍫 or eating 3-4 eggs🍳</h5>
          )}
          {minutes >= 120 && minutes < 180 && (
            <h5 className="WarningLevelFour">Fact: My friend. This is not good. Let's do something else rather than scrolling on Instagram for this long. This amount is equivalent to eating 100 grams of fish🍤 or driving 6.8 km.🚗</h5>
          )}
          {minutes >= 180 && (
            <h5 className="WarningLevelFive">
              Fact: Well well well... I'm surprised you haven't gotten tired of scrolling a long time ago. Mother earth is not happy. This amount is equivalent to eating around 100 grams of chicken🍗, pork🥓 or lamb🍖, and did you know that 100 grams
              of lamb were equivalent to driving 29.6 km🚗.
            </h5>
          )}
        </div>
      )}
    </>
  );
}

export default Form;
