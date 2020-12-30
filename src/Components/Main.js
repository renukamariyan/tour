import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import StaffWelcome from './StaffWelcome';
import CustomerWelcome from './CustomerWelcome';
import ListAllIssues from './ListAllIssues';
import AddIssue from './AddIssue';
import UpdateIssues from './UpdateIssues';
import ViewIssueById from './ViewIssueById';
import CustLogin from './CustLogin';
import CreateCustomerComponent from './CreateCustomer';
import ViewCustomer from './ViewCustomer';
import ListCustomer from './ListCustomer';
import Cust from './Cust';
import CreateTour from './CreateTour';
import DisplayAllTour from './DisplayAllTour';
import UpdateTourPackage from './UpdateTourPackage';
import DeleteTourPackage from './DeleteTourPackage';
import TourInfo from './TourInfo';
import DisplayAllTourCust from'./DisplayAllTourCust';
import Payment from './Payment';
import StaffLogin from './StaffLogin';
import ListAllTourInfo from './ListAllTourInfo';
import Package from './Package';

const Main = () => (
<Switch>
<Route exact path="/payment" component={Payment}></Route>
<Route exact path="/package" component={Package}></Route>
<Route exact path="/cust:userId" component={Cust}></Route>
<Route exact path="/listcustomer" component={ListCustomer}></Route>
<Route exact path="/Login" component={CustLogin}></Route>
<Route exact path="/insert-customer" component={CreateCustomerComponent}></Route>
<Route exact path="/view-customer/:userId" component={ViewCustomer}></Route>  
<Route exact path="/" component={LandingPage} />
<Route exact path="/AboutUs" component={AboutUs} />
<Route path = "/welcomestaff" exact component = {StaffWelcome}></Route>
<Route path = "/welcomecustomer" exact component = {CustomerWelcome}></Route>
<Route path = "/issues/allissue" exact component = {ListAllIssues}></Route>
<Route exact path = "/issues/addissue" exact component = {AddIssue}></Route>
<Route path = "/issues/updateissue/:issueId" exact component = {UpdateIssues}></Route> 
<Route path = "/issues/:issueId" exact component = {ViewIssueById}></Route>
<Route path = "/welcomestaff" exact component = {StaffWelcome}></Route>                                                  
<Route path = "/tour/all" exact component = {DisplayAllTour}></Route>
<Route path = "/tour/update/:packageId" exact component = {UpdateTourPackage}></Route>
<Route path = "/tour/delete/:packageId" exact component = {DeleteTourPackage}></Route>
<Route path = "/tour/createnewpackage" exact component = {CreateTour}></Route>
<Route path = "/custinfo/:packageId,packagePrice" exact component = {CustomerWelcome}></Route>
<Route path = "/tourinfo/:packageId" exact component = {TourInfo}></Route>
<Route path = "/tour/all/cust" exact component = {DisplayAllTourCust}></Route> 
<Route path = "/payment" exact component = {Payment}></Route>                     
<Route path = "/staff" exact component = {StaffLogin}></Route>
<Route path = "/alltourinfo" exact component = {ListAllTourInfo}></Route>

</Switch>

)
export default Main;