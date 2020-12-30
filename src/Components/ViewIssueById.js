import React, { Component } from 'react'
import IssueService from '../Service/IssueService'
import FooterComponent from './Footer'
import HeaderComponent from './Header'

class ViewIssueById extends Component {
    constructor(props) {
        super(props)

        this.state = {
            issueId: this.props.match.params.issueId,
            issue: {}
            
           
           
        }
    }
    
    componentDidMount(){
        IssueService.getIssueById(this.props.location.state.issueId).then( res => {
            console.log(this.state);
            this.setState({issue: res.data});
           
        })
       
        
    
    }
    
    cancel(){
        this.props.history.push('/issues/allissue');
    }

    render() {
        if(!this.state.issue.userId){
            return null
        }
        return (
            <div>
                <HeaderComponent />
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Issue Details</h3>
                   
                    <div className = "card-body" key = {this.state.issue.issueId}>
                        <div className = "row">
                            <label> Issue Id:{ this.state.issue.issueId} </label>
                           
                        </div>
                        <div className = "row">
                            <label> IssueDescription: { this.state.issue.issueDescription}</label>
                            
                        </div>
                        <div className = "row">
                            <label> Issue Status:{ this.state.issue.issueStatus} </label>
                           
                        </div>
                        <div className = "row">
                            <label> Customer Id: { this.state.issue.userId.userId}</label>
                           
                         </div>
                    </div>
                    <button className="btn btn-success" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Go Back</button>

                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default ViewIssueById