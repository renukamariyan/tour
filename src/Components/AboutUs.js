import React, {Component} from 'react';
import { Footer } from 'react-mdl';
import './AboutUs.css';
import FooterComponent from './Footer';
import HeaderComponent from './Header';
class Home extends Component {
    render() {
	    return (
            <div>
                <HeaderComponent />
            <section class="team-section">
                <div class="row">
                    <div class="section-title">
                        <h1>AboutUs</h1>
                        <p style={{fontSize:"25px"}}>Enough with the Formalities,Why dont you Go ahead and Internet Stalk us </p>
                    </div>
                </div>
            <div class="container">
                
                <div class="row">
                    <div class="team-items">
                         <div class="item">
                             <img src="tour_images/team-1.jpg" alt="team" height="300px"/>
                             <div class="inner">
                                 <div class="info">
                                      <h5>Renuka</h5>
                                      <p>Manager</p>
                                      <div class="social-links">
                                          <a href="https://www.facebook.com/"><span class="fa fa-facebook"></span></a>
                                          <a href=""><span class="fa fa-twitter"></span></a>
                                          <a href=""><span class="fa fa-linkedin"></span></a>
                                          <a href=""><span class="fa fa-youtube"></span></a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                         <div class="item">
                             <img src="tour_images/team-2.jpg" alt="team"  height="300px"/>
                             <div class="inner">
                                 <div class="info">
                                      <h5>Deepika</h5>
                                      <p>Manager</p>
                                      <div class="social-links">
                                          <a href=""><span class="fa fa-facebook"></span></a>
                                          <a href=""><span class="fa fa-twitter"></span></a>
                                          <a href=""><span class="fa fa-linkedin"></span></a>
                                          <a href=""><span class="fa fa-youtube"></span></a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                         <div class="item">
                             <img src="tour_images/team-3.jpg" alt="team"  height="300px"/>
                             <div class="inner">
                                 <div class="info">
                                      <h5>Vishwasri</h5>
                                      <p>Manager</p>
                                      <div class="social-links">
                                          <a href=""><span class="fa fa-facebook"></span></a>
                                          <a href=""><span class="fa fa-twitter"></span></a>
                                          <a href=""><span class="fa fa-linkedin"></span></a>
                                          <a href=""><span class="fa fa-youtube"></span></a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                         <div class="item">
                             <img src="tour_images/team-4.jpg" alt="team"  height="300px" />
                             <div class="inner">
                                 <div class="info">
                                      <h5>VijayaDurga</h5>
                                      <p>Designer</p>
                                      <div class="social-links">
                                          <a href=""><span class="fa fa-facebook"></span></a>
                                          <a href=""><span class="fa fa-twitter"></span></a>
                                          <a href=""><span class="fa fa-linkedin"></span></a>
                                          <a href=""><span class="fa fa-youtube"></span></a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                         <div class="item">
                             <img src="tour_images/team-5.jpg" alt="team"  height="300px" />
                             <div class="inner">
                                 <div class="info">
                                      <h5>Felcy</h5>
                                      <p>Manager</p>
                                      <div class="social-links">
                                          <a href=""><span class="fa fa-facebook"></span></a>
                                          <a href=""><span class="fa fa-twitter"></span></a>
                                          <a href=""><span class="fa fa-linkedin"></span></a>
                                          <a href=""><span class="fa fa-youtube"></span></a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                         <div class="item">
                             <img src="tour_images/team-6.jpg" alt="team"  height="300px" />
                             <div class="inner">
                                 <div class="info">
                                      <h5>Deepthi</h5>
                                      <p>Manager</p>
                                      <div class="social-links">
                                          <a href=""><span class="fa fa-facebook"></span></a>
                                          <a href=""><span class="fa fa-twitter"></span></a>
                                          <a href=""><span class="fa fa-linkedin"></span></a>
                                          <a href=""><span class="fa fa-youtube"></span></a>
                                      </div>
                                 </div>
                             </div>
                         </div>
                         
                    </div>
                </div>
            </div>
         </section>
         <FooterComponent />
       </div>
     
	     );
    }
}
export default Home;