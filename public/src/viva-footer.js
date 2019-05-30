
class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        
        this.innerHTML =  `<div class="footer">
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
           <div></div>`

        }
    }
    
    
    customElements.define('footer-component', FooterComponent);