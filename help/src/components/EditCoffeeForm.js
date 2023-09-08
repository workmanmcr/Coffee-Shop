import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      roast: event.target.roast.value, 
      price: parseInt(event.target.price.value), 
      available: parseInt(event.target.available.value),
      id: coffee.id
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update"/>
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;