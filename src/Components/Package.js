import React, { Component } from 'react'
import TourPackageService from '../Service/TourPackageService'
import FooterComponent from './Footer';
import HeaderComponent from './Header';
class DisplayAllTour extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tours : []
                
        }
        
        
     this.edittour = this.edittour.bind(this);
    /* this.deletetour = this.deletetour.bind(this); */
    
    }
    
 
     
     edittour(tour){
         console.log(tour.packageId)
        this.props.history.push({
                pathname:`/tour/update/${tour.packageId}`,
                state:{
                    packageId:tour.packageId
                }
            })

    }   
    deletetour(id){
       this.props.history.push({
               pathname:`/tour/delete/${id}`,
               state:{
                   packageId:id
               }
           })

   }    
    
    
    
    
    logout(){
        this.props.history.push('/welcomestaff');
    }
    

    componentDidMount(){
        TourPackageService.getTour().then((res) => {
            this.setState({ tours : res.data});
        });
    }

    
   
    
    render() {
        return (
            <div>
                <HeaderComponent />
                 <div ><h2 className="text-center" >Tour Packages</h2></div>
                        <div className="card-columns col-12">
                        {
                            this.state.tours.map(
                                tour => {
                                    return (
                                        
                                        <div className="card ">
                                            <div className="card-body text-center">
                                                <h4 class="card-title">{tour.packageName}</h4>
                                                <img className="card-img-top" src={tour.tourImage} alt="Card image"></img>
                                                <div class="card-body"><p className="card-text"><b>{tour.description}</b></p>
                                                <p className="card-text">DaysCount : {tour.daysCount}</p>
                                                <p className="card-text">NightCount : {tour.nightsCount}</p>
                                                <p className="card-text">PackageType : {tour.packageType}</p>
                                                <p className="card-text">HotelName : {tour.hotelName}</p>
                                                <p className="card-text">TripPrice : {tour.tripPrice}</p>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    )
                                   
                                })
                        }
                        <h4>To Book Ticket ,Kindly Login </h4>
                                
                        </div> 
                       
                            
                    <FooterComponent />
            </div>
        )
    }
}

export default DisplayAllTour