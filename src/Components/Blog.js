import React, {Component} from 'react';
import './Blog.css';
import FooterComponent from './Footer';
import HeaderComponent from './Header';
class Blog extends Component {
    render() {
	    return (
          <div>
            <HeaderComponent />
        <div class="cont">
            <h1>BLOGS</h1>
              <div class="card-deck">
                 <div class="card">
                 <img src='tour_images/KaniyaKumari.jpg'alt="..."/>
                     <div class="card-body">
                       <h5 class="card-title">KanyaKumari</h5>
                          <p class="card-text"> Kanyakumari is the southernmost tip of Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin. The town is a mountainous terrain amid three seas, with elevated patches of hills,. Kanyakumari is also the only place in India where you can observe the sunrise and sunset at the same beach.</p>
                            <a href="https://sumitsushil.blogspot.com/2012/03/trip-to-kanyakumari.html" class="btn btn-primary">Read</a>
                     </div>
              </div>
              <div class="card">
                <img src='tour_images/Lonavala.jpg'  alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Lonawala</h5>
                         <p class="card-text">Dreamy, scenic and mesmerising are the perfect words to describe the beautiful hill stations of Maharashtra, Lonavala and Khandala. People prefer to drive to these hill stations as the way leading here is absolutely charming. These hill towns witness a huge footfall during summers as traveller and holidaymakers from near and far visit here in huge numbers each year.</p>
                           <a href="https://www.holidify.com/pages/lonavala-a-travelogue-of-seasons-995.html" class="btn btn-primary">Read</a>
                     </div>
              </div>
              <div class="card">
                   <img src='tour_images/Banglore.jpg' alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Banglore</h5>
                          <p class="card-text">Bangalore is the capital of the southern state of Karnataka and is Asia’s fastest growing cosmopolitan city. The name Bangalore is an anglicized version of the Kannada name, Bengaluru. The city is blessed with great climate, gardens, parks, natural lakes, architectural landmarks, shopping malls and is home to the best restaurants and pubs.</p>
                              <a href="https://www.india.com/travel/bangalore/" class="btn btn-primary">Read</a>
                      </div>

               </div>
            </div>
         </div>  
         <FooterComponent />
         </div>
	     );
    }
}
export default Blog;