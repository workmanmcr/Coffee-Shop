import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const {coffee, onClickingDelete} = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.origin} - {coffee.name}</h3>
      <p><em>{coffee.roast}</em></p>
      <p><em>{coffee.price}</em></p>
      <p><em>{coffee.weight}</em></p>
      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <button onClick={props.onClickingSell}>Sell 1 Lb. Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;