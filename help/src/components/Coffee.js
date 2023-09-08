import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.origin} - {props.name}</h3>
      <p><em>{props.roast}</em></p>
      <p><em>{props.price}</em></p>
      <p><em>{props.weight}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;