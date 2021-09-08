import React, { Component } from 'react';
import './grocery.css';
/*  
Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
Add some style to your app
*/
export class Groceries extends Component {
  state = {
    groceries: [],
    purchased_groceries: [],
    purchased_message: '',
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
    console.log(this.state.groceries);
    // });
  };

  componentDidMount() {
    console.log('Component Mounted');
  }
  checkout = () => {
    this.setState({
      isPurchased: true,
      purchased_groceries: this.state.groceries,
      purchased_message: 'Thanks for Shopping!',
    });
  };

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
  startOver = () => {
    window.location.reload();
  };

  render() {
    // console.log('form data: ', this.state);

    // Then render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
    return (
      <div>
        <h1 className='site_title'>Make A Grocery List</h1>
        <div className='all_container'>
          {/* Form Container */}

          <div className='form_container'>
            <h2 className='container_title'>Add Groceries</h2>

            <form id='input_form' onSubmit={this.handleSubmit}>
              <label htmlFor='item'>Item</label>
              <input
                id='item'
                onChange={this.handleChange}
                value={this.state.item}
                type='text'
                required
              />

              <label htmlFor='quantity'>Quantity</label>
              <input
                id='quantity'
                onChange={this.handleChange}
                value={this.state.quantity}
                type='text'
                required
              />
              <label htmlFor='quantity'>Select Unit</label>
              <select
                name='unit'
                id='units'
                onChange={this.handleChange}
                value={this.state.units}
                required
              >
                <option value=''>select</option>
                <option value='liters'>liters (L)</option>
                <option value='millilitres'>millilitres (mL) </option>
                <option value='grams'>grams (g)</option>
                <option value='kilograms'>kilograms (kg)</option>
              </select>
              <button type='submit' value='Submit'>
                Submit
              </button>
            </form>
          </div>

          {/* Display List Container */}
          <div className='display_list_container'>
            <h2 className='container_title'>Cart</h2>

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
                <div className='checkout_clear_btns'>
                  <button
                    className='checkout_btn'
                    onClick={() => {
                      this.checkout();
                      console.log(this.state.groceries);
                    }}
                  >
                    Checkout
                  </button>
                  <button
                    onClick={() => {
                      this.startOver();
                    }}
                  >
                    Start Over
                  </button>
                </div>
              </ol>
            </div>
          </div>
          {/* Checkout Container */}
          <div className='checkout_container'>
            <h2 className='container_title'>Purchased Groceries</h2>
            <ol className='purchases'>
              {this.state.purchased_groceries.map((grocery, idx) => (
                <li key={idx}>
                  {' ' + grocery.item + ' '}
                  {' ' + grocery.quantity + ' '}
                  {grocery.units + ' '}
                </li>
              ))}
              <h3 className='thankYou'>{this.state.purchased_message}</h3>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Groceries;
