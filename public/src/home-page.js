

class HomePage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        
        this.innerHTML =  `
        <ion-content>
   <div>
   </div>
   <div>
   </div>
   <div>
      <img id="hero" src="https://firebasestorage.googleapis.com/v0/b/vivaxr-dbc49.appspot.com/o/sm-viv-hero.gif?alt=media&token=a1964ee5-e162-44d0-8af2-637c662519ff">
   </div>
   <div class="hero-text">
      <h1>DISCOVER. CREATE. IMMERSE.</h1>
      <p>Viva XR helps artists and fans</p>
      <p>intimately connect using Mixed Reality Technology</p>
   </div>
   <ion-col>
      <h2 align="center">How It Works</h2>
      <ion-label>
      </ion-label>
   </ion-col>
   <ion-row>
      <ion-col size="3">
         <img id="icons"  src = "https://firebasestorage.googleapis.com/v0/b/vivaxr-dbc49.appspot.com/o/AugmentedReality_38.svg?alt=media&token=6d1d8e7e-79dd-432e-9499-7c0f866c9ea7" />
      </ion-col>
      <ion-col size="9">
         <h3> Create </h3>
         <p>We are curating the best mixed reality content, upload your 360 and VR videos and join the community</p>
         <a> Upload a Video </a>
      </ion-col>
      <ion-col size="3"> 
         <img id="icons"  src = "https://firebasestorage.googleapis.com/v0/b/vivaxr-dbc49.appspot.com/o/AugmentedReality_37.svg?alt=media&token=42145106-3949-425e-84f1-fdf9cdc1138e" />
      </ion-col>
      <ion-col size="9">
         <h3> Explore </h3>
         <p>Be a part of events, concerts, adventure and action from the comfort of your home, watch VR content</p>
         <a> Watch in VR </a>
      </ion-col>
      <ion-col size="3">
         <img id="icons"  src = "https://firebasestorage.googleapis.com/v0/b/vivaxr-dbc49.appspot.com/o/AugmentedReality_47.svg?alt=media&token=70cec4e4-6d73-480f-a15c-dcf875012807" />
      </ion-col>
      <ion-col size="9">
         <h3> Immerse </h3>
         <p>There’s a virtual world waiting to be explored, immerse yourself in a new adventure everyday</p>
         <a>Create an Account</a>
      </ion-col>
   </ion-row>
   <div>
      <ion-input>
      </ion-input>
      <div>
      </div>
   </div>
   <div>
   </div>
   <ion-card>
      <ion-row>
         <ion-col size="4">
            <img src = "https://firebasestorage.googleapis.com/v0/b/vivaxr-dbc49.appspot.com/o/download.jpg?alt=media&token=355c640d-d070-40b7-8483-951ac95ec6ab" />
         </ion-col>
         <ion-col size="8">
            <h3>  Sign up for a chance to win an</h3>
            <h2>Oculus Go Headset</h2>
         </ion-col>
      </ion-row>
   </ion-card>
   <div>
   <ion-col>
   <h2> Featured Videos</h2>
   <ion-grid>
      <ion-row>
         <ion-col>
            <ion-card>
               <img src= "https://cdn.glitch.com/f4feab55-7fa5-4924-972f-c40e285456cf%2Fbigwithtext-flyingthrough.png?1558912182529"/>
            </ion-card>
         </ion-col>
      </ion-row>
      <ion-row>
         <ion-col>
            <ion-card>
               <img src= "https://cdn.glitch.com/f4feab55-7fa5-4924-972f-c40e285456cf%2Fwalkin-mountains-small.png?1558912306840"/>
            </ion-card>
         </ion-col>
         <ion-col>
            <ion-card>
               <img src= "https://cdn.glitch.com/f4feab55-7fa5-4924-972f-c40e285456cf%2Fsmall2-with%20text.png?1558911702077"/>
            </ion-card>
         </ion-col>
      </ion-row>
   </ion-grid>
   <!--Footer start here-->
   <div class="footer">
      <ion-grid>
         <ion-row>
            <ion-col size="4">
               <h6 class="footertext"> About us</h6>
               <h6 class="footertext"> Explore</h6>
               <h6 class="footertext"> Promotions</h6>
            </ion-col>
            <ion-col size="4">
               <h6 class="footertext"> Upload</h6>
               <h6 class="footertext"> Support</h6>
               <h6 class="footertext"> FAQ's</h6>
            </ion-col>
            <ion-col size="4">
               <h6 class="footertext"> Connect</h6>
               <ion-icon name="logo-facebook"></ion-icon>
               <ion-icon name="logo-twitter"></ion-icon>
               <br>
               <ion-icon name="logo-instagram"></ion-icon>
               <ion-icon name="logo-linkedin"></ion-icon>
            </ion-col>
         </ion-row>
      </ion-grid>
   </div>
   <ion-col class="disclaimer-text">
      Copyright | Disclaimer | Terms & Conditions | Privacy Policy 
   </ion-col>
   <div></div>
</ion-content>
</ion-app>
</body>
</html>`

    }
}


customElements.define('home-page', HomePage);

