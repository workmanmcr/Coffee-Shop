import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCoffeeForm(props) {

  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: parseFloat(event.target.price.value),
      available: parseFloat(event.target.available.value),
      id: coffee.id
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
  onEditCoffee: PropTypes.func.isRequired,
  coffee: PropTypes.obj
};

export default EditCoffeeForm;