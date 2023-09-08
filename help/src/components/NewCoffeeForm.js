import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";


function NewCoffeeForm(props){
  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      weight: event.target.weight.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewCoffeeFormSubmission}
      buttonText="Add to menu" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;