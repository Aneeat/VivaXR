

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
      <img id="hero" src="/assets/sm-viv-hero.gif">
   </div>
   <div class="hero-text">
      <h1>DISCOVER. CREATE. IMMERSE.</h1>
      <p>Viva XR helps artists and fans</p>
      <p>intimately connect using Mixed Reality Technology</p>
      <ion-button color="secondary">UPLOAD</ion-button> <ion-button>EXPLORE</ion-button>
   </div>
   <ion-col>
      <h2 align="center">How It Works</h2>
      <ion-label>
      </ion-label>
   </ion-col>
   <ion-row>
      <ion-col size="2">
         <img id="icons"  src = "/assets/PhoneIcon.png" />
      </ion-col>
      <ion-col size="9">
         <h3> Create </h3>
         <p>We are curating the best mixed reality content, upload your 360 and VR videos and join the community</p>
         <a> Upload a Video </a>
      </ion-col>
      <ion-col size="2"> 
         <img id="icons"  src = "/assets/imageicon.png" />
      </ion-col>
      <ion-col size="9">
         <h3> Explore </h3>
         <p>Be a part of events, concerts, adventure and action from the comfort of your home, watch VR content</p>
         <a> Watch in VR </a>
      </ion-col>
      <ion-col size="2">
         <img id="icons"  src = "/assets/VRIcon.png" />
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
            <img class="icons" src = "/assets/Oculus.jpg" />
         </ion-col>
         <ion-col size="8">
            <h3>Get a 10% discount on your very own headset Oculus Go headset</h3>
            <h2>Oculus Go Headset</h2>
            <ion-icon name="arrow-dropright"></ion-icon>
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
               <img src= "/assets/sagrada-familia-inside3.jpg"/>
            </ion-card>
         </ion-col>
      </ion-row>
      <ion-row>
         <ion-col>
            <ion-card>
               <img src= "/assets/sn-monarchsH_1.jpg"/>
            </ion-card>
         </ion-col>
         <ion-col>
            <ion-card>
               <img src= "/assets/anna-tremewan-1447454-unsplash.jpg"/>
            </ion-card>
         </ion-col>
      </ion-row>
   </ion-grid>
   <footer-component></footer-component>
</ion-content>
`

    }
}


customElements.define('home-page', HomePage);

