import React, { Component } from 'react';
import CustomerService from '../Service/CustomerService';
import ReactPaginate from 'react-paginate' ;
import HeaderComponent from './Header';
import FooterComponent from './Footer';
class ListCustomer  extends Component {
    constructor(props){
        super(props)
        this.state={
            customer: [],
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0

        }
        this.insertCustomer=this.insertCustomer.bind(this);
        this.clickPageHandler=this.clickPageHandler.bind(this);
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
                        customer: slice
                    })

    }
    
    componentDidMount() {
        CustomerService.getCustomer().then((response)=> {
            const data = response.data;
            const slice=data.slice(this.state.offset, this.state.offset+this.state.perPage)
            this.setState({
            pageCount:Math.ceil(data.length/this.state.perPage),
            orgData:response.data,
            customer: slice
        });
        });
    }
    insertCustomer(){
        this.props.history.push('/insert-customer');
    }
    render(){
        return (
            <div>
                <HeaderComponent />
                <h2 className="text-center">Customer List</h2>
                
                <div className="container"><ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{textAlign:"center"}}>Customer Id</th>
                                <th>Customer Name</th>
                                <th>Customer EmailId</th>
                                <th>Customer Age</th>
                                <th>Customer PhoneNo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customer.map(
                                    customer =>
                                    <tr key={customer.id}>
                                            <td align="center">{customer.userId}</td>
                                            <td>{customer.name} </td>
                                            <td> {customer.emailId} </td>
                                            <td align="center"> {customer.age}</td>
                                            <td> {customer.phoneNo} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <FooterComponent />
            </div>

        )
    }
}
export default ListCustomer;