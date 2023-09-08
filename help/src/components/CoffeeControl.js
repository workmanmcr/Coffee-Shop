import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeMenu from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";
import { v4 } from 'uuid';

class CoffeeControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCoffee: null,
      editing: false,
      mainCoffeeList: [
        {
          name: "Columbian",
          origin: "columbia",
          roast: "Dark",
          price: 10,
          available: 5,
          id: v4()
        },
        {
          name: "Daves coffee" ,
          origin: "Daves house",
          roast: "Light",
          price: 10,
          available: 10,
          id: v4()
        },
        {
          name: "Petes coffee",
          origin: "k-mart",
          roast: "Medium",
          price: 15,
          available: 15,
          id: v4()
        },
      ]
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

  handleAddingNewCoffeeToList = (newCoffee) => {
    if (!newCoffee.name || 
      !newCoffee.origin ||
      !newCoffee.roast || 
      !newCoffee.price ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newCoffeeItem = {
      ...newCoffee,
      quantity: 0,
      burlap: 0,
      id: v4(),
    };
  
    this.setState((prevState) => ({
      mainCoffeeList: [...prevState.mainCoffeeList, newCoffeeItem],
      formVisibleOnPage: false,
    }));
  };
  
  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = 
    this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
    });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleSellingCoffee = () => {
    const { selectedCoffee, mainCoffeeList } = this.state;
    if (selectedCoffee.available > 0) {
      const updatedCoffee = {
        ...selectedCoffee,
        available: selectedCoffee.available - 1,
      };
  
      const updatedMainCoffeeList = mainCoffeeList.map((coffee) =>
        coffee.id === selectedCoffee.id ? updatedCoffee : coffee
      );
  
      this.setState({
        mainCoffeeList: updatedMainCoffeeList,
      });
    }
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm
      coffee = {this.state.selectedCoffee}
      onEditCoffee = {this.handleEditingCoffeeInList}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail 
      coffee = {this.state.selectedCoffee} 
      onClickingDelete = {this.handleDeletingCoffee}
      onClickingEdit = {this.handleEditClick}
      onCoffeeSale = {this.handleSellingCoffee} />
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm 
      onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>;
      buttonText = "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeMenu 
      coffeeList={this.state.mainCoffeeList} 
      onCoffeeSelection={this.handleChangingSelectedCoffee} />;
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

export default CoffeeControl;