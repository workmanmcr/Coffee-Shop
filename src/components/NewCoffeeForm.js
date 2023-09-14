import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';


function AddCoffeeForm(props) {

    function handleNewCoffeeFormSubmission(event) {
      event.preventDefault();
      props.onNewCoffeeCreation({
        name: event.target.name.value,
        origin: event.target.origin.value,
        price: parseFloat(event.target.price.value),
        available: parseInt(event.target.available.value),
        id: v4()
      });
    }
  
    return (
      <>
        <ReusableForm
          formSubmissionHandler={handleNewCoffeeFormSubmission}
          buttonText="Add to Coffee"
          buttonClass="custom-button"
        />
      </>
    );
    
  }

  AddCoffeeForm.propTypes = {
    onNewCoffeeCreation: PropTypes.func
  };

  export default AddCoffeeForm;