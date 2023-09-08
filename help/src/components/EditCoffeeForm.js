import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCoffeeForm(props) {

  const { Coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      available: event.target.available.value,
     
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee"
        defaultValues={Coffee} />
    </>
  );
}

EditCoffeeForm.propTypes = {
  onEditCoffee: PropTypes.func.isRequired
};

export default EditCoffeeForm;