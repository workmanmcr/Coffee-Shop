import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeMenu from "./CoffeeMenu";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class MenuControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainMenu: [],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
  }

  handleAddingNewCoffeeToMenu = (newCoffee) => {
    const newMainMenu = this.state.mainMenu.concat(newCoffee);
    this.setState({mainMenu: newMainMenu,
    formVisibleOnPage: false });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainMenu.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainMenu = this.state.mainMenu.filter(coffee => coffee.id !== id);
    this.setState({
      mainMenu: newMainMenu,
      selectedCoffee: null
    });
  }

  handleSellClick = (id) => {
    this.setState(prevState => {
      const updatedCoffeeMenu = prevState.mainCoffeeMenu.map(coffee => {
        if (coffee.id === id) {
          const updatedQuantity = coffee.quantity - 1;
          const updatedBurlap = Math.floor(updatedQuantity / 130);
          if (updatedQuantity < 0) {
            alert("Not enough coffee to sell!");
            return coffee;
          }
          return { ...coffee, quantity: updatedQuantity, burlap: updatedBurlap };
        }
        return coffee;
      });
      return {
        mainCoffeeMenu: updatedCoffeeMenu,
        selectedCoffee: updatedCoffeeMenu.find(coffee => coffee.id === id)
      };
    });
  };
  

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingCoffeeInMenu = (coffeeToEdit) => {
    const editedMainMenu = this.state.mainMenu.filter(coffee => coffee.id !== this.state.selectedCoffee.id)
    .concat(coffeeToEdit);
    this.setState({
      mainMenu: editedMainMenu,
      editing: false,
      selectedCoffee: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInMenu} />
      buttonText = "Return to Coffee Menu";
    }
    else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} onClickingDelete = {this.handleDeletingCoffee} onClickingEdit = {this.handleEditClick} onClickingSell = {this.handleSellingCoffee}/>
      buttonText = "Return to Coffee Menu";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToMenu}/>
      buttonText = "Return to Coffee Menu";
    } else {
      currentlyVisibleState = <CoffeeMenu coffeeMenu={this.state.mainMenu} onCoffeeSelection={this.handleChangingSelectedCoffee}/>;
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default MenuControl;