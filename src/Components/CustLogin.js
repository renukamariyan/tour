import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../Service/CustomerService';
import './CreateCustomer.css';
import {Layout,Header,Navigation,Content,Menu,MenuItem,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CreateCustomerComponent from './CreateCustomer';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
class CustLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            userId: '',
            userPassword: '',
        }
        this.changeUserIdHandler =this.changeUserIdHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);
    }  
    insertCustomer =(e) =>{
        e.preventDefault();
        let customerLogin ={ userId: this.state.userId, userPassword: this.state.userPassword};
        console.log('customer =>' + JSON.stringify(customerLogin));
        CustomerService.validateUser(customerLogin).then(res =>{
            this.props.history.push({pathname:'/tour/all/cust',state:{userId:this.state.userId}});
            console.log(res);
        }).catch(e=>{console.log(e);
        window.alert("Wrong user name/password");})
    }
    changeUserIdHandler =(event) =>{
        this.setState({userId:parseInt(event.target.value)});
    }
    
    changePasswordHandler =(event) =>{
        this.setState({userPassword:event.target.value});
    }
    cancel(){
        this.props.history.push('/');
    }
        render() { 
        return ( 
            <div>
            <HeaderComponent />
            
                <div className="container">
                   
                        
                            <h3 style={{textAlign:"center"}}>Login</h3>
                                
                                    <form>
                                    <div className="row">
                                        <div className="col-25">
                                            <label for="name">  User Id: </label>
                                            </div>
                                            <div className="col-75">
                                                <input type="text" id="name" placeholder="User Id" name="name" 
                                                    value={this.state.name} onChange={this.changeUserIdHandler}/>
                                        </div></div>
                                       
                                        <div className="row">  
                                        <div className="col-25">
                                            <label for="password"> Password: </label> </div>
                                            <div className="col-75">
                                            <input type="text" id="password" placeholder="Password" name="password" className="col-75"
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div></div>
                                        <br />
                                        <div className="row">
                                            <br />
                                        <button className="btn btn-success" onClick={this.insertCustomer} style={{marginLeft: "500px"}}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "20px"}}>Cancel</button>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <br />
                                            <h6 style={{marginLeft:450}} >Are You Nooob, ??<span><Link to ="/welcomecustomer">Click here to Register</Link></span></h6>
                                        </div>
                                    </form>
                                   
                                 </div>
                                 <FooterComponent /></div>
                
        
  
        );
    
    }
}
 
export default CustLogin;