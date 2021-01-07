import React from 'react';
import TourPackageService from '../Service/TourPackageService'
import FooterComponent from './Footer'
import HeaderComponent from './Header'
class UpdateTourValid extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {},
        packageId: this.props.location.state.packageId,
        description:'',
        daysCount:'',
        nightsCount:'',
        packageType:'',
        hotelName:'',
        tripPrice:''
      }
    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
    //description
    if(!fields["description"]){
        formIsValid = false;
        errors["description"] = "Cannot be empty";
    }
    //trip price
    if(!fields["tripPrice"]){
        formIsValid = false;
        errors["tripPrice"] = "Cannot be empty";
      }
  
      if(typeof fields["tripPrice"] !== "undefined"){
        if(!fields["tripPrice"].match("^.(?=.*\\d)")){
          formIsValid = false;
          errors["tripPrice"] = "Only numbers";
        }     
    }
  
      this.setState({errors: errors});
      return formIsValid;
    }
    updateTour = (e) => {
        if(this.handleValidation()) {
        e.preventDefault();
        let tour={ packageId:this.props.location.state.packageId,
            packageName: this.state.packageName,
            description:this.state.fields.description,
            daysCount:this.state.daysCount,
            nightsCount:this.state.nightsCount,
            packageType:this.state.packageType,
            hotelName:this.state.hotelName,
            tripPrice:this.state.fields.tripPrice};
        console.log('tour => ' + JSON.stringify(tour));
        console.log(this.props.location.state.packageId)
        TourPackageService.updateTour(tour.packageId,tour).then( res => {
           window.alert("Tour Package Updated Successfully!")
           });
          
    
    }
}
    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
        
      }else{
        alert("Package details are incorrect.")
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
            <HeaderComponent />
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Tour</h3>
                                <div className = "card-body"></div>       	
          <form name="Update Tour" className="Update Tour" onSubmit= {this.contactSubmit.bind(this)}>
          <div className = "form-group">
          <label> Description: </label>
            
            
                <input refs="description" className="form-control"  placeholder="Description" onChange={this.handleChange.bind(this, "description")} value={this.state.fields["description"]}/>
                <span className="error">{this.state.errors["description"]}</span>
                <br/>
          </div>
          <div className = "form-group">
          <label> Trip Price: </label>

                <input ref="tripPrice" className="form-control"  placeholder="tripPrice" onChange={this.handleChange.bind(this, "tripPrice")} value={this.state.fields["tripPrice"]}/>
                <span className="error">{this.state.errors["tripPrice"]}</span>
                <br/>
             
            </div>
           
            
              
                <button className="btn btn-success" onClick={this.updateTour}>Set Description</button>
             
            
          </form>
        </div>
        </div>
        </div>
        </div>
      )
    }
  }
  export default UpdateTourValid;