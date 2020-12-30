import React, { Component } from 'react'
import IssueService from '../Service/IssueService'
import HeaderComponent from './Header'


class AddIssue extends Component {
    constructor(props) {
        super(props)
        this.state={
            issueDescription:'',
            issueStatus:'Unresolved',
            userId:''
           
           
          
        }
        /* this.saveIssue=this.saveIssue.bind(this) */
      
 

    }
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    

    /* changeissueStatus=()=>{
        this.setState({issueStatus:'Unresolved'});
    } */
    saveIssue = (e) => {
      
        e.preventDefault();
        let issue = {issueDescription: this.state.issueDescription, issueStatus: this.state.issueStatus ,userId:{userId:this.props.location.state.userId }};
        console.log('issue => ' + JSON.stringify(issue));
        IssueService.createIssue(issue).then( res => {
            console.log(res);
            window.alert("Issue is added Successfully with issueID " + res.data.issueId);
            this.props.history.push({
                pathname:`/`,
                
            });
         } );
    
    }

    
    cancel(){
        this.props.history.push({
            pathname:`/tour/all/cust`,
            
        });
    }
   

    render() {
        
        return (
            <div>
                <HeaderComponent />
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Issue</h3>
                                <div className = "card-body">
                                <form method="post">
                                        <div className = "form-group">
                                            <label> Issue Description: </label>
                                            <input placeholder="what is your issue?"  className="form-control" name="issueDescription" 
                                               style={{height:"70px"}} value={this.state.issueDescription} onChange={this.changeHandler}/>
                                        </div>
                                        
                                         
                                        <button className="btn btn-success" onClick={this.saveIssue}>Send</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Cancel</button>
                                        
                                    </form>
                                    
                                        
                                    
                                </div>
                                
                            </div>
                        </div>

                   </div>
            </div>
        )
    }

    
   
}
export default AddIssue