import React from 'react';
  
class CreatePaymentForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["bankName"] = "";
        input["cardHolderName"] = "";
        input["phoneNumber"] = "";
        input["creditCardNumber"] = "";
        input["expiryDate"]="";
        this.setState({input:input});
  
        alert('Form is submited');
    }
  }
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["bankName"]) {
        isValid = false;
        errors["bankName"] = "Please enter your Bank Name.";
      }
      if (!input["cardHolderName"]) {
        isValid = false;
        errors["cardHolderName"] = "Please enter your card Holder Name.";
      }
  
      if (!input["phoneNumber"]) {
        isValid = false;
        errors["phoneNumber"] = "Please enter your phone number.";
      }
  
      if (typeof input["phoneNumber"] !== "undefined") {
          
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["phoneNumber"])) {
          isValid = false;
          errors["phoneNumber"] = "Please enter only number.";
        }else if(input["phoneNumber"].length != 10){
          isValid = false;
          errors["phoneNumber"] = "Please enter valid phone number.";
        }
      }
  
      if (!input["creditCardNumber"]) {
        isValid = false;
        errors["creditCardNumber"] = "Please enter your Credit Card Number.";
      }
      if (!input["expiryDate"]) {
        isValid = false;
        errors["expiryDate"] = "Please enter date.";
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h1>Payment Form</h1>
        <form onSubmit={this.handleSubmit}>
  
          <div class="form-group">
            <label for="bankName">Bank Name</label>
            <input 
              type="text" 
              name="bankName" 
              value={this.state.input.bankName}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Bank Name" 
              id="bankName" />
  
              <div className="text-danger">{this.state.errors.bankName}</div>
          </div>
  
          <div class="form-group">
            <label for="cardHolderName">Card Holder Name</label>
            <input 
              type="text" 
              name="cardHolderName" 
              value={this.state.input.cardHolderName}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Card Holder Name" 
              id="cardHolderName" />
  
              <div className="text-danger">{this.state.errors.cardHolderName}</div>
          </div>
 
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input 
              type="text" 
              name="phoneNumber" 
              value={this.state.input.phoneNumber}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter phone Number" 
              id="phoneNumber" />
  
              <div className="text-danger">{this.state.errors.phoneNumber}</div>
          </div>
  
          <div class="form-group">
            <label for="creditCardNumber">Credit card Number</label>
            <input 
              type="number"
              name="creditCardNumber"
              value={this.state.input.creditCardNumber} 
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter credit card Number"
               />
  
              <div className="text-danger">{this.state.errors.creditCardNumber}</div>
          </div>
          <div class="form-group">
            <label for="expiryDate">Expiry Date</label>
            <input 
              type="date"
              name="expiryDate"
              value={this.state.input.expiryDate} 
              onChange={this.handleChange}
              placeholder="Enter Expiry date"
              class="form-control"/>
  
              <div className="text-danger">{this.state.errors.expiryDate}</div>
          </div>
          
        
              
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
    );
  }
}
  
export default CreatePaymentForm;