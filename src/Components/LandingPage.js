
import './LandingPage.css';
import {Layout,Header,Navigation,Content,Menu,MenuItem,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

function App() {
  return (
    <div>
      <HeaderComponent/>
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
      <div>

  </div>
<FooterComponent />
</div>
  );
}

export default App;
