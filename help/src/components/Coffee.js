import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>Coffee Origin: {props.origin}</em></p>
        <p>Roast Style: {props.roast}</p>
        <p>Cost per lb: ${props.price}</p>
        <p>Available: {props.available} lbs</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;