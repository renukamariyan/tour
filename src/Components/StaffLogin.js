import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../Service/StaffService';
import './CreateCustomer.css';
import {Layout,Header,Navigation,Content,Menu,MenuItem,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StaffService from '../Service/StaffService'

import CreateCustomerComponent from './CreateCustomer';
import HeaderComponent from './Header';
class StaffLogin extends Component {
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
        StaffService.validateStaff(customerLogin).then(res =>{
            this.props.history.push({pathname:'/welcomestaff',state:{userId:this.state.userId}});
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
            <React.Fragment>
                <HeaderComponent />
            <div style={{margin:"auto",width:"60%"}}>
                <div className="container">
                   
                        
                            <h3 style={{textAlign:"center"}}>Staff Login</h3>
                                <div>
                                    <form>
                                    <div className="row">
                                        <div className="col-25">
                                            <label>User Id: </label>
                                            </div>
                                            <div className="col-75">
                                                <input type="text" placeholder="User Id" name="name" 
                                                    value={this.state.name} onChange={this.changeUserIdHandler}/>
                                        </div></div>
                                       
                                        <div className="row">  
                                        <div className="col-25">
                                            <label> Password: </label> </div>
                                            <div className="col-75">
                                            <input type="text" placeholder="Password" name="password" className="col-75"
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div></div>
                                        <br />
                                        <div className="row">
                                            
                                        <button className="btn btn-success" onClick={this.insertCustomer} style={{marginLeft: "380px"}}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "20px"}}>Cancel</button>
                                        </div>
                                       
                                    </form>
                                    </div> </div>
                        </div>
                    
                
        
  <Footer size="mega">
    <FooterSection type="middle">
    <FooterDropDownSection title="Contact Us">
           <h4>TRIPTOK</h4>
           <h6>Hogwarts,UK</h6>
           <h6><b>Phone:</b> 9876543210</h6>
           <h6><b>Email:</b> Tripintip@triptok.com</h6>
        </FooterDropDownSection>
        <FooterDropDownSection title="About Us">
           <p> Cleartrip.com is centered on making travel simple and has been designed to let you look for cheap flights or complete your flight booking in just a few clicks. The booking experience is seamless and fast with our features like Expressway – which allows for easy checkout, Shortlist – this lets you compare multiple itineraries across dates, Fare alert – here we inform you of price drops or hikes, and even EMI options for expensive air tickets. Our round-the-clock customer service ensures all your queries and concerns are addressed efficiently and resolved.</p>
        </FooterDropDownSection>
        <FooterDropDownSection >
            
        </FooterDropDownSection>
        <FooterDropDownSection title=" More">
            <FooterLinkList>
                <a href="/">About us</a>
                <a href="/">Blog</a>
                <a href="/">Book ticket</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
   
</Footer>
          
          </React.Fragment>
        );
    
    }
}
 
export default StaffLogin;