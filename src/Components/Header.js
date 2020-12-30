import './LandingPage.css';
import {Layout,Header,Navigation,Content,Menu,MenuItem,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
function HeaderComponent() {
    return(
        <div style={{height: '400px', position: 'relative',background: 'url(https://www.scholarshipchina.com/upload/News/18/18/b91d94229ead1f1b16cd6a1616a2c4a6.jpg) center / cover'}}>
    <Layout fixedHeader > 
    <Header title="TRIPTOK" style={{backgroundColor:"turquoise",fontSize:"22px"}}>
            <Navigation style={{backgroundColor:"turquoise"}} >
                <Link to="/" style={{color: 'black',fontSize:"22px"}}>Home</Link>
                <Link to="/AboutUs" style={{color: 'black',fontSize:"22px"}}>About us</Link>
                <a href="/" style={{color: 'black',fontSize:"22px"}}>Blog</a>
                <a href="/package" style={{color: 'black',fontSize:"22px"}}>Packages</a>
                <div style={{position: 'relative'}}>
                <a id="demo-menu-lower-right" style={{color: 'black',fontSize:"22px"}}>Login</a>
                <Menu target="demo-menu-lower-right" align="right">
                <MenuItem ><Link to="/login" style={{color: 'black',fontSize:"18px"}}>As Customer</Link></MenuItem>
                <MenuItem><Link to="/staff" style={{color: 'black',fontSize:"18px"}}>As Staff</Link></MenuItem>         
                </Menu>
                </div>  
            </Navigation>
        </Header>
        <Content />
    </Layout>
</div>
    );
}
export default HeaderComponent;
