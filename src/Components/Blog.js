
import './LandingPage.css';
import {Layout,Header,Navigation,Content,Menu,MenuItem,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div><div style={{height: '440px', position: 'relative'}}>
    <Layout style={{background: 'url(https://www.scholarshipchina.com/upload/News/18/18/b91d94229ead1f1b16cd6a1616a2c4a6.jpg) center / cover'}}>
        <Header transparent title="TRIPTOK" style={{color: 'black'}}>
     
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
<div style={{height: '200px', position: 'relative',backgroundColor:'mediumturquoise'}}>
  <br /><br />
 <p style={{textAlign:'center',fontSize:'25px'}}>Wanna get away from 9 to 5 regular job.<br/>Take your phone just click and pay for the amazing getaway experience.<br/>Worried about "PLANNING" leave that to us.<br/>It ain't called Trip on tip for no reason </p>
 

</div>

<div style={{background: 'turquoise'}}>
<div style={{height: '100px', position: 'relative',backgroundColor:'darkturquoise'}}>
  <br /><br />
  
 <p style={{textAlign:'center',fontSize:'25px'}}>See what other have to say about us .</p>

</div>
<Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2500}
      >
        <div>
         <img src="/images/image1.png" alt="xxxx" />
        
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
         
            <p>
             Excellent
            </p>
          </div>
          
        </div>
      

        <div>
          <img src="/images/image2.png" alt="xxxx" />
          <div className="myCarousel">
            <h3>Daniel</h3>
            <h4>Designer</h4>
            <p>
            It is very good site.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/image3.png" alt="xxxx" />
          <div className="myCarousel">
            <h3>Soren</h3>
            <h4>Designer</h4>
            <p>
              I enjoyed the trip and it is very good site.
            </p>
          </div>
        </div>
      </Carousel>
      <br /><br />
      </div>
<Footer size="mega">
  <div>

  </div>
    <FooterSection type="middle">
    <FooterDropDownSection title="Contact Us">
           <h4>TRIPTOK</h4>
           <h6>Hogwarts,UK</h6>
           <h6><b>Phone:</b> 9876543210</h6>
           <h6><b>Email:</b> Tripintip@triptok.com</h6>
        </FooterDropDownSection>
        <FooterDropDownSection title="About Us">
           <p> Cleartrip.com is centered on making travel simple and has been designed to let you look for cheap flights or complete your flight booking in just a few clicks. The booking experience is seamless and fast with our features like Expressway – which allows for easy checkout, Shortlist – this lets you compare multiple itineraries across dates, Fare alert – here we inform you of price drops or hikes, and even EMI options for expensive air tickets. Our round-the-clock customer service ensures all your queries and concerns are addressed efficiently and resolved.</p>
        </FooterDropDownSection>
        <FooterDropDownSection >
            
        </FooterDropDownSection>
        <FooterDropDownSection title=" More">
            <FooterLinkList>
                <a href="/">About us</a>
                <a href="/">Blog</a>
                <a href="/">Book ticket</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
   
</Footer>
</div>
  );
}

export default App;
