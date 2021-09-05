import React, { Component } from 'react';
/*  
Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
Add some style to your app
*/
export class Groceries extends Component {
  state = {
    groceries: [],
    item: '',
    units: '',
    quantity: 0,
    isPurchased: false,
  };
  handleChange = (e) => {
    console.log(e);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      isPurchased: true,
      groceries: [this.state.item, this.state.units, this.state.quantity],
    });
  };

  // Make an array of 3 objects.
  // arr = { item: '', units: '', quantity: 0, isPurchased: false };
  componentDidMount() {
    console.log('Component Mounted');
  }

  // Make inputs so that new items can be added
  inputs() {}

  render() {
    console.log('form data: ', this.state);

    // Then render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <lable htmlFor='item'>Add Grocery Item</lable>
          <input
            id='item'
            onChange={this.handleChange}
            value={this.state.item}
          />

          <lable htmlFor='quantity'>Quantity</lable>
          <input
            id='quantity'
            onChange={this.handleChange}
            value={this.state.quantity}
          />

          <lable htmlFor='units'>Units</lable>
          <input
            id='units'
            onChange={this.handleChange}
            value={this.state.units}
          />

          <button onClick={() => this.componentDidMount()}>Submit</button>
        </form>

        <div>
          <h2>Your Grocery List</h2>
          <h4>{this.state.groceries}</h4>
        </div>

        {/* <button onClick={() => this.inputs()}>Input a grocery</button>
        <h4>
          {this.state.item}, {this.state.quantity}lbs, {this.state.units} liters
        </h4> */}
      </div>
    );
  }
}

export default Groceries;
