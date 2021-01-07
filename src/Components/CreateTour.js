import React, { Component } from 'react'
import TourPackageService from '../Service/TourPackageService'


class CreateTour extends Component {
    constructor(props) {
        super(props)
        this.state={
            
            tour: {
                packageName:'',
                description:'',
                daysCount:'',
                nightsCount:'',
                packageType:'',
                hotelName:'',
                tripPrice:'',
                tourImage:''
            },
            errors: {
                packageName:'',
                description:'',
                daysCount:'',
                nightsCount:'',
                packageType:'',
                hotelName:'',
                tripPrice:'',
                tourImage:''
            }
            
        }
       
     }
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    
    cancel(){
        this.props.history.push('/welcomestaff');
    }
    handleValidation(){
        let tour = this.state.tour;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!tour["packageName"]){
          formIsValid = false;
          errors["packageName"] = "Cannot be empty";
        }
    
        
          if(!tour["packageName"].match(/^[a-zA-Z\s]+$/)){
            formIsValid = false;
            errors["packageName"] = "Only letters";
          } 
          else {
            errors["packageName"] = "";
        }    
      
      //description
      
      if(!tour["description"]){
          formIsValid = false;
          errors["description"] = "Cannot be empty";
      }
      
    if (!tour["description"].match(/^[a-zA-Z\s]+$/)) {
      formIsValid = false;
      errors["description"] = " Description should contain only letters";
  }
  else {
      errors["description"] = "";
  }
      //dayscount
      if(!tour["daysCount"]){
          formIsValid = false;
          errors["daysCount"] = "Cannot be empty";
      }
          
          if(!tour["daysCount"].match("^[0-9]+")){
          formIsValid = false;
          errors["daysCount"] = "Only numbers";
          }
          else {
            errors["daysCount"] = "";
        }
      
        
        //nightscount
        if(!tour["nightsCount"]){
          formIsValid = false;
          errors["nightsCount"] = "Cannot be empty";
      }
    
          if(!tour["nightsCount"].match("^[0-9]+")){
          formIsValid = false;
          errors["nightsCount"] = "Only numbers";
      }
      else {
        errors["nightsCount"] = "";
    }
      
        
        //packageType
        if(!tour["packageType"]){
          formIsValid = false;
          errors["packageType"] = "Cannot be empty";
        }
    
        
          if(!tour["packageType"].match(/^[a-zA-Z\s]+$/)){
            formIsValid = false;
            errors["packageType"] = "Only letters";
        }     
        else {
          errors["packageType"] = "";
      }
      //hotelname
      if(!tour["hotelName"]){
          formIsValid = false;
          errors["hotelName"] = "Cannot be empty";
        }
    
      if(!tour["hotelName"].match(/^[a-zA-Z\s]+$/)){
            formIsValid = false;
            errors["hotelName"] = "Only letters";
            
      }
      else {
        errors["hotelName"] = "";
    }
      //trip price
      if(!tour["tripPrice"]){
          formIsValid = false;
          errors["tripPrice"] = "Cannot be empty";
        }
    
          if(!tour["tripPrice"].match("^[1-9]+")){
            formIsValid = false;
            errors["tripPrice"] = "Only numbers";
          }  
          else {
            errors["tripPrice"] = "";
        }   
      if (!tour["tourImage"]) {
        formIsValid = false;
        errors["tourImage"] = "Tour Image cannot be empty. Please enter the file location ";
    }
    
        this.setState({errors: errors});
        return formIsValid;
      }
    
      
    
      handleChange(field, e){    		
        let tour = this.state.tour;
        tour[field] = e.target.value;        
        this.setState({tour});
      }
      saveTour = (e) => {
      
        e.preventDefault();
        let tour = { packageName: this.state.tour.packageName,description:this.state.tour.description,
        daysCount:this.state.tour.daysCount,
        nightsCount:this.state.tour.nightsCount,
        packageType:this.state.tour.packageType,
        hotelName:this.state.tour.hotelName,
        tripPrice:this.state.tour.tripPrice,
        tourImage: this.state.tour.tourImage};
        if (this.handleValidation()) {
            console.log('Tour => ' + JSON.stringify(tour));

            TourPackageService.createTour(tour).then( res => {
                console.log(res);
                window.alert("Tour is added Successfully for " + res.data.packageName);
             } )
               .catch(error => {
                    console.log(error.response)
                    window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)

                })
        } else {
            console.log(this.state.errors)
            alert("Form has errors. Please enter the correct information.");

        }
        
    
    }
    
    render() {
        
        return (
            <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Tour</h3>
                                <div className = "card-body">
                                <form method="post" onSubmit={this.saveTour.bind(this)}>
                                <div className="col-md-6">
                               <div className="form-group" >
              <label>Package Name: </label>
              <input ref="packageName" type="text"  class="form-control" placeholder="packageName" onChange={this.handleChange.bind(this, "packageName")} value={this.state.tour["packageName"]}required/>
              <span className="error">{this.state.errors["packageName"]}</span>
              </div>
              <div className="form-group" >
              <label>Description: </label>
              <input refs="description" type="text"  class="form-control" placeholder="Description" onChange={this.handleChange.bind(this, "description")} value={this.state.tour["description"]} required/>
              <span className="error">{this.state.errors["description"]}</span>
              </div>
              <div className="form-group" >
              <label>DaysCount: </label>
                <input ref="daysCount" type="number" class="form-control"placeholder="daysCount" onChange={this.handleChange.bind(this, "daysCount")} value={this.state.tour["daysCount"]}required/>
                <span className="error">{this.state.errors["daysCount"]}</span>
                </div>
                 <div className="form-group" >
                <label>NightsCount: </label>
                <input ref="nightsCount" type="number"  class="form-control" placeholder="nightsCount" onChange={this.handleChange.bind(this, "nightsCount")} value={this.state.tour["nightsCount"]}required/>
                <span className="error">{this.state.errors["nightsCount"]}</span>
                </div>
                <div className="form-group" >
                <label>PackageType: </label>
                <input ref="packageType" type="text"  class="form-control" placeholder="packageType" onChange={this.handleChange.bind(this, "packageType")} value={this.state.tour["packageType"]}required/>
                <span className="error">{this.state.errors["packageType"]}</span>
                </div>
                <div className="form-group" >
                <label>HotelName: </label>
                <input ref="hotelName" type="text"  class="form-control" placeholder="hotelName" onChange={this.handleChange.bind(this, "hotelName")} value={this.state.tour["hotelName"]}required/>
                <span className="error">{this.state.errors["hotelName"]}</span>
                </div>
                <div className="form-group" >
                <label>TripPrice: </label>
                <input ref="tripPrice" type="number"  class="form-control"placeholder="tripPrice" onChange={this.handleChange.bind(this, "tripPrice")} value={this.state.tour["tripPrice"]}required/>
                <span className="error">{this.state.errors["tripPrice"]}</span>
                </div>
                 <div className="form-group">
                <label >Tour Image URL: </label>
                <input ref="tourImage" type="text"  class="form-control"
                     placeholder="Image URL" value={this.state.tour["tourImage"]} onChange={this.handleChange.bind(this, "tourImage")} required />
                <span className="error">{this.state.errors["tourImage"]}</span>
                </div> 
                

            
                
                                        <button className="btn btn-success" type="submit" >Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Cancel</button>
                                     </div>   
                                    </form>
                                    
                                        
                                    
                                </div>
                            </div>
                        </div>

                   </div>
                        
                    
                    
            </div>
              
        )
    }

    
   
}
export default CreateTour;