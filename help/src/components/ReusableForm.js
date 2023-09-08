import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type="text"
        name="name"
        placeholder="Coffee name" />
        <input
        type="text"
        name="origin"
        placeholder="Origin" />
        <input
        type="text"
        name="roast"
        placeholder="Light, medium, or dark?" />
         <input
        type="text"
        name="price"
        placeholder="Price" />
        <input
        type="text"
        name="weight"
        placeholder="Weight" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;