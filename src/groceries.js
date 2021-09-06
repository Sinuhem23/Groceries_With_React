import React, { Component } from 'react';
import './grocery.css';
/*  
Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
Add some style to your app
*/
export class Groceries extends Component {
  state = {
    groceries: [],
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.state.groceries.push({
      id: this.state.groceries.length,
      item: this.state.item,
      quantity: this.state.quantity,
      units: this.state.units,
      isPurchased: false,
    });
    this.setState({
      id: '',
      item: '',
      units: '',
      quantity: 0,
      isPurchased: false,
    });
    // });
  };
  // add = (grocery) => {
  //   this.setState((state) => ({
  //     groceries: [
  //       ...state.groceries,
  //       grocery.id + 1,
  //       grocery.item,
  //       grocery.quantity,
  //       grocery.units,
  //     ],
  //     isPurchased: true,
  //   }));
  // };

  componentDidMount() {
    console.log('Component Mounted');
  }

  // Make inputs so that new items can be added
  delete = (id) => {
    this.setState({
      groceries: this.state.groceries.filter((item) => {
        return item.id !== id;
      }),
    });
    this.state.groceries.splice(id);
    // console.log(this.state.groceries);
    this.setState({});
    // }
  };

  render() {
    // console.log('form data: ', this.state);

    // Then render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
    return (
      <div>
        <h1>Make A Grocery List</h1>
        <form id='input_form' onSubmit={this.handleSubmit}>
          <lable htmlFor='item'>Item</lable>
          <input
            id='item'
            onChange={this.handleChange}
            value={this.state.item}
            type='text'
          />

          <lable htmlFor='quantity'>Quantity</lable>
          <input
            id='quantity'
            onChange={this.handleChange}
            value={this.state.quantity}
            type='text'
          />

          <select
            id='units'
            onChange={this.handleChange}
            value={this.state.units}
          >
            <option>Select Unit</option>
            <option>liters (L)</option>
            <option>millilitres (mL) </option>
            <option>grams (g)</option>
            <option>kilograms (kg)</option>
          </select>

          <button type='submit'>Submit</button>
        </form>

        {/* Display List */}
        <div>
          <h2>Cart</h2>

          {/* Map to iterate */}
          <div>
            <ol className='ol_info'>
              {this.state.groceries.map((grocery, idx) => (
                <li key={idx}>
                  Item:{' ' + grocery.item + ' '}
                  Quantity:{' ' + grocery.quantity + ' '}
                  Units:{grocery.units + ' '}
                  <button onClick={() => this.delete(idx)}>Remove</button>
                </li>
              ))}
              <button onClick={() => console.log(this.state.groceries)}>
                Checkout
              </button>
            </ol>
            {/* <h4>{this.state.groceries.map[() => this.state.groceries.item]}</h4> */}
          </div>

          {/* <h4>Item: {this.state.groceries[0]}</h4>
          <h4>Quantity: {this.state.groceries[2]}</h4>

          <h4>Unit: {this.state.groceries[1]}</h4> */}
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
