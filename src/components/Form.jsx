import React from "react";

function Form() {
  const minutes = 0;
  const carbon = 1;

  function calculateCarbon() {
    let total = minutes * carbon;

    return total;
  }

  return (
    <>
      <form className="Form">
        <input className="InputField" required type="number" minutes={minutes} id="form-minutes" placeholder="Type how many minutes" />
        <button className="SquareButton" onClick={() => calculateCarbon()}>
          Calculate
        </button>
      </form>

      <div className="ResultWrapper">
        <h3>
          <b>Your carbon impact is</b>
        </h3>
        <h4>
          <b>{calculateCarbon()} </b> <br></br> gEqCO2 per day
        </h4>
        <h5>Fact: </h5>
      </div>
    </>
  );
}

export default Form;
