import React from 'react'

export class Home extends React.Component  {

    constructor(props){
        super(props);
    
        this.state = {
          fields: {},
          errors: {}
        }
      }
    
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!fields["name"]){
          formIsValid = false;
          alert("Cannot be empty");
        }
        else if (typeof fields["name"] !== "undefined") {
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              alert("please enter alphabets");
            }      	
        }
  
  
    
        //emailId
        if(!fields["emailId"]){
          formIsValid = false;
          alert("Cannot be empty");
        }
        else if (typeof fields["emailId"] !== "undefined") {
          if(!fields["emailId"].match(/$^|.+@.+..+/)){
              formIsValid = false;
              alert("enter correct emailId");
            }      	
        }
    
      //phone num
          if(!fields["phone"]){
              formIsValid = false;
              alert("Cannot be empty");
            } 
            else if (typeof fields["phone"] !== "undefined") {
              if(!fields["phone"].match("^\\d{10}$")){
                  formIsValid = false;
                  alert("Enter 9digits only for MobileNum ");
                }      	
            }
  
       //age
       if(!fields["age"]){
          formIsValid = false;
          alert("Cannot be empty");
        } 
        else if (typeof fields["page"] !== "undefined") {
          if(!fields["age"]>'80'){
              formIsValid = false;
              alert("Age should be below 80");
            }      	
        }
  
    
    // Password
    if(!fields["password"]){
      formIsValid = false;
      alert("Cannot be empty");
    } 
  
  this.setState({errors: errors});
  return formIsValid;
      }
      insertCustomer =(e) =>{
          e.preventDefault();
          let customer ={ name: this.state.field.name,
             emailId: this.state.field.emailId, 
             age: this.state.field.age,
             phoneNo: this.state.field.phoneNo,
            password: this.state.field.password};
          console.log('customer =>' + JSON.stringify(customer));
      
      /*    CustomerService.createCustomer(customer).then(res =>{
                 window.alert("Your User Id"+res.data.userId)
      });*/
  }
    /*  changeNameHandler =(event) =>{
          this.setState({name:event.target.value});
      }
      changeemailIdIdHandler =(event)=>{
          this.setState({emailIdId:event.target.value});
      }
      changeAgeHandler =(event) =>{
          this.setState({age:event.target.value});
      }
      changePhoneNoHandler =(event) =>{
          this.setState({phoneNo:event.target.value});
      }
      changePasswordHandler =(event) =>{
          this.setState({password:event.target.value});
      }
      handleChange=(event)=>{
          if({password: event.target.value.length>1}){
              this.setState({
                  disabled:false
              });
          }
      }*/
      cancel(){
          this.props.history.push('/customer');
      }
  
      contactSubmit(e){
          e.preventDefault();
          if(this.handleValidation()){
            alert("Form submitted");
          }
        
      
        }
      
        handleChange(field, e){    		
          let fields = this.state.fields;
          fields[field] = e.target.value;        
          this.setState({fields});
        }
      
        render(){
          return (
            <div>        	
              <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                <div className="col-md-6">
                <h1>CreateCustomer</h1>
                  <fieldset>
                    <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                    <span className="error">{this.state.errors["name"]}</span>
                    <br/>
                    <input refs="emailId" type="text" size="30" placeholder="emailId" onChange={this.handleChange.bind(this, "emailId")} value={this.state.fields["emailId"]}/>
                    <span className="error">{this.state.errors["emailId"]}</span>
                    <br/>
                    <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                    <span className="error">{this.state.errors["phone"]}</span>
                    <br/>
                    <input refs="age" type="text" size="30" placeholder="Age" onChange={this.handleChange.bind(this, "age")} value={this.state.fields["age"]}/>
                    <span className="error">{this.state.errors["age"]}</span>
                    <br/>
                    <input refs="password" type="text" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                    <span className="error">{this.state.errors["password"]}</span>
                    <br/>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button className="btn btn-lg pro" id="submit" value="Submit">Register</button>
                  </fieldset>
                </div>
              </form>
            </div>
          )
        }
      }
export default CreateClassForm; 