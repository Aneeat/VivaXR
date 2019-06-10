

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
           <img class="hero" src="/assets/sm-viv-hero.gif">
        <div class="hero-text">
           <h1>DISCOVER. CREATE. IMMERSE.</h1>
           <p>Viva XR helps artists and fans intimately connect using Mixed Reality Technology</p>
           <ion-button color="secondary">UPLOAD</ion-button> <ion-button href="/explore">EXPLORE</ion-button>
        </div>
      </div>
        <ion-col>
           <h2 text-align="center">How it Works</h2>
           <ion-label>
           </ion-label>
        </ion-col>
        <ion-row>
           <ion-col size="3">
              <img id="icons"  src = "/assets/PhoneIcon.png" />
           </ion-col>
           <ion-col size="9">
              <h3> Create </h3>
              <p>We are curating the best mixed reality content, upload your 360 and VR videos and join the community</p>
              <a> Upload a Video </a>
           </ion-col>
           <ion-col size="3"> 
              <img id="icons"  src = "/assets/imageicon.png" />
           </ion-col>
           <ion-col size="9">
              <h3> Explore </h3>
              <p>Be a part of events, concerts, adventure and action from the comfort of your home, watch VR content</p>
              <a> Watch in VR </a>
           </ion-col>
           <ion-col size="3">
              <img id="icons"  src="/assets/VRIcon.png" />
           </ion-col>
           <ion-col size="9">
              <h3> Immerse </h3>
              <p>There’s a virtual world waiting to be explored, immerse yourself in a new adventure everyday</p>
              <!-- test link to video html to be removed-->
     
              <a href="public/_video-page.html"> Create an Account</a>
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
                 <img class="icons" src="/assets/Oculus.jpg" />
              </ion-col>
              <ion-col size="8">
                 <h3>Get a 10% discount on your very own headset Oculus Go headset</h3>
                 <h1>Oculus Go Headset</h1>
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
                 <a href="https://youtu.be/kCFWmhUWeNs"><img src="/assets/SagradiaFamilia.png"/></a>
                 </ion-card>
              </ion-col>
           </ion-row>
           <ion-row>
              <ion-col>
                 <ion-card>
                    <img src="/assets/Monarch.png"/>
                 </ion-card>
              </ion-col>
              <ion-col>
                 <ion-card>
                    <img src="/assets/NL.png"/>
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

