import React from 'react';
import {Layout,Header,Navigation,Content,Menu,MenuItem,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TourInfoService from '../Service/TourInfoService'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HeaderComponent from './Header';
class CreateTourInfo extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            packageId: this.props.location.state.packageId,
            userId: this.props.location.state.userId,
            noOfPerson:'',
            totalCost:'',
            modeOfPayment :'',
            paymentStatus:false,
            reservationStatus :false,
        }
       
     }
     
    

    changePersonHandler =(event) =>{
        this.setState({noOfPerson:event.target.value});
    }

    saveTour = (e) => {
      
        e.preventDefault();
        let tour = { 
        packageId: {packageId:this.props.location.state.packageId},
        userId:{userId:this.props.location.state.userId},
        noOfPassenger:this.state.noOfPerson,
        modeOfPayment:'Card',
        totalCost:this.props.location.state.tripPrice*parseInt(this.state.noOfPerson)
        
        };
        console.log('Tour => ' + JSON.stringify(tour));
        TourInfoService.confirmTour(tour).then( response =>{
            window.alert("Total Cost"+tour.totalCost)
            console.log(response);
    
    }).catch(e=>{console.log(e);
        window.alert("Wrong user name/")})};

    
    cancel(){
        this.props.history.push('/welcomestaff');
    }
    render(){
        return(
            <div>
                <HeaderComponent />
  <div>
  <div style={{margin:"auto",width:"60%"}}>
                <div className="container">
                   
                            <h3 style={{textAlign:"center"}}>Book Ticket</h3>
                                
                                    <form>
                                    
                                        <div className="row">
                                        <div className="col-25">
                                            <label> No of Person </label>
                                        </div>
                                        <div className="col-75">
                                                <input type="text" placeholder="no of person" name="noOfPerson" 
                                                    value={this.state.noOfPerson} onChange={this.changePersonHandler}/>
                                        </div>
                                        </div>
                                       
                                        <div className="row">
                                            <br />
                                            <br />
                                        <button className="btn btn-success" onClick={this.saveTour} style={{marginLeft: "300px"}}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "50px"}}>Cancel</button>
                                        </div>
                                        <div className="row">
                                            <br />
                                            <h6 style={{marginLeft:"300px"}} >Already a Customer ??<span><Link to ="/Login">Login</Link></span></h6>
                                        </div>
                                    </form>
                                 </div>
                                 </div>
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
          </div>
        );
    }
}
 export default CreateTourInfo;