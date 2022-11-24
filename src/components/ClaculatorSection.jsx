import React from "react";
import Form from "./Form";

function ClaculatorSection() {
  return (
    <div className="Header">
      <section className="CalculatorSection">
        <h2>Let's calculate your carbon impact</h2>
        <h3>
          <i>
            How much time do you spend on <br></br> Instagram on average per day?
          </i>
        </h3>
        <Form></Form>
      </section>
    </div>
  );
}

export default ClaculatorSection;
