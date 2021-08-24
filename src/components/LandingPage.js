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

function LandingPage() {

  return (
   <main>
      <contianer>
         <nav>
            <div class="search">
               <input value="Search..."/>
               <button class="search" >&#x2315;</button>
            </div>
            <div class="menu">
               <a href="#">Shop</a> 
               <a href="#">Subscription</a>
               &nbsp; | &nbsp;
               <a class="lessPadding" href="#"><svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16663 32.5C11.6666 30.8333 15 30 16.6666 28.3333C18.3333 26.6667 13.3333 26.6667 13.3333 18.3333C13.3333 10 20 10 20 10C20 10 26.6666 10 26.6666 18.3333C26.6666 26.6667 21.6666 26.6667 23.3333 28.3333C25 30 28.3333 30.8333 30.8333 32.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 36.6666C29.2048 36.6666 36.6667 29.2047 36.6667 20C36.6667 10.7952 29.2048 3.33331 20 3.33331C10.7953 3.33331 3.33337 10.7952 3.33337 20C3.33337 29.2047 10.7953 36.6666 20 36.6666Z" stroke="black" stroke-width="1.5"/></svg></a> 
               <a class="lessPadding" href="#"><svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33337 10L19.6877 23.0835C19.8703 23.2295 20.1298 23.2295 20.3124 23.0835L36.6667 10" stroke="black" stroke-width="1.5"/><rect x="3.33337" y="8.33331" width="33.3333" height="23.3333" rx="0.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a> 
               &nbsp; &nbsp;
               <button>Try for free</button>
            </div>
         </nav>
         <section class="logoRow">
            <div class="logoHoriz"></div>
         </section>
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
