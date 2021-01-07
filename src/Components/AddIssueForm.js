import React from 'react';
import IssueService from '../Service/IssueService';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
class AddIssuesForm extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {},
        issueDescription:'',
        issueStatus:'Unresolved',
        userId:''
      }
    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if(!fields["issueDescription"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
      }
  
      if(typeof fields["issueDescription"] !== "undefined"){
        if(!fields["issueDescription"].match(/^[a-zA-Z0-9\s]+$/)){
          formIsValid = false;
          errors["issueDescription"] = "Only letters";
        }       
      }
  
    
      
  
  
  
      this.setState({errors: errors});
      return formIsValid;
    }
    saveIssue = (e) => {
    if(this.handleValidation()){
          e.preventDefault();
    let issue = {issueDescription: this.state.fields.issueDescription, issueStatus: this.state.issueStatus ,userId:{userId:this.props.location.state.userId }};
    console.log('issue => ' + JSON.stringify(issue));
    IssueService.createIssue(issue).then( res => {
        console.log(res);
        window.alert("Issue is added Successfully with issueID " + res.data.issueId);
        this.props.history.push({
            pathname:`/`,
            
        });
     } );
    }
    }
      // IssueService.createIssue(issue).then( res => {
      //     console.log(res);
      //     window.alert("Issue is added Successfully with issueID " + res.data.issueId);
      //    this.props.history.push({
      //        pathname:`/`,
              
      //    });
      //} );
  
  

  
  cancel(){
      this.props.history.push({
          //pathname:`/tour/all/cust`,
          
      });
  }
  
    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
        
        //alert("Form submitted");
        }
      
      else{
        alert("Form has errors.")
      }
  
    }
  
    handleChange(field, e){       
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }
  
    render(){
      return (
        <div>  
            <HeaderComponent />    
          <div className = "container">  
          <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Tell us Ur Issue</h3>
            <div className = "card-body">
          
          <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
           <div className = "form-group">
            
            <label for="issueDescription">Issue Description</label> 
             
                   <input placeholder="what is your issue?"  className="form-control" name="issueDescription" 
                style={{height:"120px"}}  onChange={this.handleChange.bind(this, "issueDescription")} value={this.state.fields["issueDescription"]}/>
                <span className="error">{this.state.errors["issueDescription"]}</span>
                <br/>
             
            </div>
              <button className="btn btn-success" onClick={this.saveIssue}>Send</button>
              <button className="btn btn-danger" onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Cancel</button>
                                     
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
export default AddIssuesForm;