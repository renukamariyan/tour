import React, { Component } from 'react'
import TourPackageService from '../Service/TourPackageService'
import FooterComponent from './Footer'
import HeaderComponent from './Header'
class UpdateTourPackage extends Component {
    constructor(props) {
        super(props)
        this.state={
            packageId: this.props.location.state.packageId,
            packageName:'',
            description:'',
            daysCount:'',
            nightsCount:'',
            packageType:'',
            hotelName:'',
            tripPrice:''
        }

       
    }


    updateTour = (e) => {
      
        e.preventDefault();
        let tour={ packageId:this.props.location.state.packageId,packageName: this.state.packageName,description:this.state.description,
            daysCount:this.state.daysCount,
            nightsCount:this.state.nightsCount,
            packageType:this.state.packageType,
            hotelName:this.state.hotelName,
            tripPrice:this.state.tripPrice};
        console.log('tour => ' + JSON.stringify(tour));
        console.log(this.props.location.state.packageId)
        TourPackageService.updateTour(tour.packageId,tour).then( res => {
           window.alert("Tour Package Updated Successfully!")
           });
          
    
    }
    
    cancel(){
        this.props.history.push('/tour/all');
    }
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render() {
        
        return (
            <div>
                <HeaderComponent />
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Tour</h3>
                                <div className = "card-body">
                                <form method="post">
                                        
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input   className="form-control" name="description"
                                                value={this.state.description} onChange={this.changeHandler} />
                                        </div>
                                        
                                        
                    
                                        <div className = "form-group">
                                            <label> TripPrice </label>
                                            <input  className="form-control" name="tripPrice"
                                                value={this.state.tripPrice} onChange={this.changeHandler}/>
                                        </div>  
                                    
                                        <button className="btn btn-success" onClick={this.updateTour}>save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </form>
                                </div>
                            
                            </div>
                        </div>

                   </div>
                   <FooterComponent />
            </div>
        )
    }
}

export default UpdateTourPackage