import React, { Component } from 'react';
import CustomerService from '../Service/CustomerService';

class ViewCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.match.params.custid,
            customer: {},
         }
    }
    componentDidMount() {
        CustomerService.getCustomerById(this.props.location.state.userId).then(res =>{
            this.setState({customer: res.data});
        })
    }
    
    render() { 
        return (  
            <div>
            <br></br>
                <div className ="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Customer Details </h3>
                    <div className="card-body">
                        <div className="row">
                            <label>User Id: </label>
                            <div>{this.state.customer.id} </div>
                        </div>
                        <div className="row">
                            <label> Name: </label>
                            <div>{this.state.customer.name} </div>
                        </div>
                        <div className="row">
                            <label>EmailId: </label>
                            <div>{this.state.customer.emailId} </div>
                        </div>
                        <div className="row">
                            <label>Age: </label>
                            <div>{this.state.customer.age} </div>
                        </div>
                        <div className="row">
                            <label>PhoneNo: </label>
                            <div>{this.state.customer.phoneNo} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ViewCustomer;