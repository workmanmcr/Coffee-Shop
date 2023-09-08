import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeMenu(props){
  return (
    <React.Fragment>
      <hr/>
        {props.coffeeList.map((coffee) =>
          <Coffee 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name={coffee.name}
          roast={coffee.roast}
          price={coffee.price}
          available={coffee.available}
          id={coffee.id}
          key={coffee.id}/>
        )}
    </React.Fragment>
  );
}

CoffeeMenu.propTypes = {
  coffeeMenu: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeMenu;