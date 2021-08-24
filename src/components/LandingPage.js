import './Water.css'
import './App.css';
import '../logoHoriz.png';
import '../logoStacked.png';

import '../icon1.png';
import '../icon2.png';
import '../icon3.png';
import '../icon4.png';


import { db } from '../services/firebase.js'
import Subscribe from './Subscribe.js'
import Header from './Header.js'

function LandingPage() {

  return (
   <main>
      <contianer>
         <Header />
         <section class="outline">
            <div class="secondNavRow padding">
               <a href="#">ABOUT US</a> 
               <a href="#">PET CLONING</a> 
               <a href="#">OUR SCIENCE</a> 
               <a href="#">OUR PARTNERS</a> 
               <a href="#">OUR STORIES</a> 
               <a href="#">SPONSORS</a> 
            </div>
            <div class="headlineRow flexCenter">
               Headline
            </div>
         </section>
         <section class="outline subheadingRow padding">
            <h3>Subheading</h3>
            <p>Aliquam erat volutpat. Donec vehicula, diam non gravida efficitur, velit nisi finibus mauris, at fringilla ante sem vel nulla. Nullam lacinia magna vitae cursus convallis. Integer scelerisque blandit efficitur. Aenean ut sodales orci. Suspendisse imperdiet iaculis blandit. Pellentesque mollis mattis tempor. </p>
         </section>
         <section class="outline formStoriesRow">
            <div class="formCollumn outline">
  
               <Subscribe/> 
            </div>
            <div class="storiesCollumn ">
               <h3>Our Stories</h3>
               <div class="boxGrid">
                  <div class="boxRow">
                     <div class="outline box icon1"> 
                        
                     </div>
                     <div class="outline box icon2"> 
                        
                     </div>
                  </div>
                  <div class="boxRow">
                     <div class="outline box icon3"> 
                        
                     </div>
                     <div class="outline box icon4"> 
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="outline footer flexCenter">
            <h3>footer</h3>
         </section>

      </contianer>
   </main>
  );
}

export default LandingPage;
