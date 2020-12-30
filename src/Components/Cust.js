import React from 'react';
import './LandingPage.css';
import {Layout,Header,Navigation,Content,Menu,MenuItem,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import FooterComponent from './Footer';

class Cust extends React.Component{
    constructor(props) {
        super(props)

        this.state = {  
        userId:''
       
    }}
        add(){
            this.props.history.push({pathname:'issues/createissue',state:{userId:this.state.userId}})
        }
  render(){  return (
    <div><div style={{height: '440px', position: 'relative'}}>
    <Layout style={{background: 'url(https://www.scholarshipchina.com/upload/News/18/18/b91d94229ead1f1b16cd6a1616a2c4a6.jpg) center / cover'}}>
        <Header transparent title="TRIPTOK" style={{color: 'black'}}>
        window.alert("Welcome "+this.state.userId);
            <Navigation >
                <Link to="/AboutUs" style={{color: 'black'}}>About us</Link>
                <a href="/" style={{color: 'black'}}>Blog</a>
                <a href="/" style={{color: 'black'}}>Packages</a>
                <div style={{position: 'relative'}}>
                <a id="demo-menu-lower-right" style={{color: 'black'}}>Login</a>
                <Menu target="demo-menu-lower-right" align="right">
                <MenuItem> <Link to="/welcomecustomer" >As Customer</Link></MenuItem>
                <MenuItem><Link to="/StaffWelcome" >As Staff</Link> </MenuItem>         
                <MenuItem>As Staff</MenuItem>
                </Menu>
                </div>  
            </Navigation>
          
        </Header>
        
        <b><h1 align="center"><br/><br />Welcome to TRIPTOK<br/><i> Trip on tip </i></h1></b>
        <Content />

    </Layout>
</div>


<div>
                <div className="jumbotron">
                <h1>Welcome Customer!!</h1>
                </div>
                <button className="btn btn-info" onClick={this.add.bind(this)}>Add Issue</button>
                                    
            </div>
          
  
<FooterComponent />
</div>
  );
}
}
export default Cust;
