import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>{coffee.name}</h3>
      <p>Origin: {coffee.origin}</p>
      <p>Roast Style: {coffee.roast}</p>
      <p>Cost per lb: ${coffee.price}</p>
      <p>Available lbs for sale: {coffee.available}</p>
      
      <button onClick={ props.onClickingEdit }>Edit</button> 
      <button onClick={ props.onCoffeeSale }>Sell</button> 
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onCoffeeSale: PropTypes.func
};

export default CoffeeDetail;