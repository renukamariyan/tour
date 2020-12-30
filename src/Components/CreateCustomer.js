import React, { Component } from 'react';
import CustomerService from '../Service/CustomerService';
class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            name: '',
            emailId: '',
            age: '',
            phoneNo:'',
            password: '',
            disabled: true
        }
        this.changeNameHandler =this.changeNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changePhoneNoHandler =this.changePhoneNoHandler.bind(this);
        this.insertCustomer=this.insertCustomer.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
    }  
    insertCustomer =(e) =>{
        e.preventDefault();
        let customer ={ name: this.state.name, emailId: this.state.emailId, age: this.state.age, phoneNo: this.state.phoneNo, password: this.state.password};
        console.log('customer =>' + JSON.stringify(customer));

        CustomerService.createCustomer(customer).then(res =>{
               window.alert("Your User Id"+res.data.userId)
    });
}
    changeNameHandler =(event) =>{
        this.setState({name:event.target.value});
    }
    changeEmailIdHandler =(event)=>{
        this.setState({emailId:event.target.value});
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
    }
    cancel(){
        this.props.history.push('/customer');
    }
        render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Sign Up</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label> Name: </label>
                                                <input placeholder="Name" name="name" className="form-control"
                                                    value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> EmailId: </label>
                                            <input placeholder="EmailId" name="emailId" className="form-control"
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control"
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> PhoneNo: </label>
                                            <input placeholder="PhoneNo" name="phoneNo" className="form-control"
                                                value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control"
                                                value={this.state.password} onChange={this.changePasswordHandler} onClick={this.handleChange} />
                                        </div>
                                     
                                         
                                        <button disabled={this.state.disabled} className="btn btn-success" onClick={this.insertCustomer}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "20px"}}>Cancel</button>
                                    </form>
                                 </div>
                        </div>
                    </div>
                </div>
            </div>
         ); 
    } n
}
 
export default CreateCustomerComponent;