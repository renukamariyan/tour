import React, { Component } from 'react'
import TourPackageService from '../Service/TourPackageService'
import {Link} from 'react-router-dom'
import HeaderComponent from './Header'
import { Button } from 'react-mdl'
class DisplayAllTour extends Component {
    constructor(props) {
        super(props)

        this.state = {
                
                tours : [],
              
        }
       
     this.submittour = this.submittour.bind(this);
    /* this.deletetour = this.deletetour.bind(this); */
    
    }
    
    add(){
        this.props.history.push({
            pathname:`/issues/addissue`,
            state:{
                
                userId:this.props.location.state.userId,
               
            }
        });
    }
    
    
           
                
     
     submittour(tour){
         console.log(tour.tripPrice)
        this.props.history.push({
                pathname:`/tourinfo/${tour.packageId}`,
                state:{
                    
                    packageId:tour.packageId,
                    userId:this.props.location.state.userId,
                    tripPrice:tour.tripPrice
                }
            })
    }   
    
    

    
    logout(){
        this.props.history.push('/Login');
    }
    

    componentDidMount(){
        TourPackageService.getTour().then((res) => {
            this.setState({ tours : res.data});
        });
    }

    
   
    
    render() {
        return (
            <div>
                <HeaderComponent/>
                 <div style={{backgroundColor:'darkturquoise'}}><h2 className="text-center" >Tour Packages</h2></div>
                        <div className="card-columns col-12">
                        {
                            this.state.tours.map(
                                tour => {
                                    return (
                                        <div className="card ">
                                            <div className="card-body text-center">
                                                <h4 class="card-title">{tour.packageName}</h4>
                                                <img className="card-img-top" src={tour.tourImage} alt="Card image"></img>
                                                <div class="card-body"><p className="card-text">{tour.description}</p>
                                                <p className="card-text">DaysCount : {tour.daysCount}</p>
                                                <p className="card-text">NightCount : {tour.nightsCount}</p>
                                                <p className="card-text">PackageType : {tour.packageType}</p>
                                                <p className="card-text">HotelName : {tour.hotelName}</p>
                                                <p className="card-text">TripPrice : {tour.tripPrice}</p>
                                                <button onClick={() => this.submittour(tour)} className="btn btn-info">Book Ticket </button>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                        
                        </div> 
                       <button  className="btn btn-success"  style={{marginLeft: "500px"}}onClick={this.logout.bind(this)} >Logout</button>
                            
                       <div>
               
               <div style={{backgroundColor:'darkturquoise'}}>
                   <br />
               <h5 style={{textAlign:"center"}}>Having Issue???<br /> Feel free to Update Us</h5>
               <button className="btn btn-info" onClick={this.add.bind(this)} style={{marginLeft:"560px"}}>Submit a Issue</button>
               <br />
               </div>
                
                                    
            </div>
            </div>
        )
    }
}

export default DisplayAllTour