import React, { Component } from 'react'
import TourInfoService from '../Service/TourInfoService'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import ReactPaginate from 'react-paginate' 
import '../App.css'
import HeaderComponent from './Header';
class ListAllTourInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            offset:0,
            tourinfos : [],
            orgData:[],
            perPage:5,
            currentPage:0
                
        }
     this.cancel = this.cancel.bind(this);
     this.clickPageHandler=this.clickPageHandler.bind(this) 
    }
    
    clickPageHandler=(e)=>
    {
        const selectedPage=e.selected;
        const offset=selectedPage*this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        },()=>
        {
            this.loadMoreData();
        })
    }

    loadMoreData=()=>
    {
        const data=this.state.orgData
        const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
                this.setState(
                    {
                        pageCount:Math.ceil(data.length/this.state.perPage),
                        tourinfos: slice
                    })

    }

    componentDidMount()
    {TourInfoService.getTourInfo().then((response) => {
       const data = response.data;
       const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
        this.setState({
            pageCount:Math.ceil(data.length/this.state.perPage),
            orgData:response.data,
            tourinfos: slice
        });
    });
    }
  
     
     
     cancel(tourinfo){
        this.props.history.push({
                pathname:`/cancel/{tourId}`,
                state:{
                    tourId:tourinfo.tourId
                }
            })

    }   
    
    
    
        
    
    
    logout(){
        this.props.history.push('/welcomestaff');
    }
    
     
    
   
    
    render() {
        return(
        <div>
            <HeaderComponent />
            <h2 className="text-center">Issues List</h2>
            <div className="row">
            </div>
            <div className="container"><ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                    <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th >Tour Info Id</th>
                        <th > Package ID</th>
                        <th > User ID</th>
                        <th > No of Passenger</th>  
                        <th > Total Cost</th>
                        <th>Payment Status</th>
                        <th>Reservation Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                                    this.state.tourinfos.map(
                                        tourinfo => 
                                        <tr key = {tourinfo.tourId}>
                                            <td>{tourinfo.tourId}</td>
                                             <td> { tourinfo.packageId.packageId} </td>
                                             <td> {tourinfo.userId.userId}</td>   
                                             <td> { tourinfo.noOfPassenger}</td>
                                             <td > { tourinfo.totalCost}</td>
                                             <td> { tourinfo.paymentStatus}</td>  
                                             <td> { tourinfo.reservationStatus}</td>
                                             <td>
                                                 <button onClick={ () => this.cancel(tourinfo)} className="btn btn-info">Cancel </button>
                                                 
                                                 
                                             </td> 
                                             
                                        </tr>
                                    )
                                }
                    </tbody>

                </table>
                </div>
            
       
       <button  className="btn btn-success"  style={{marginLeft: "500px"}}onClick={this.logout.bind(this)} >Logout</button>
          </div>     
        )
        
        
        
        
        
        
        
        
        
        
                            

        
    }
}

export default ListAllTourInfo;