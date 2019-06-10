class VideosPage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` <ion-content>
        <iframe  class="iframe-container" src="https://www.youtube.com/embed/ELQh3z4KrXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
<!--Video details start here-->        
 
       <div class="ion-margin-start">
         <ion-grid> 
       <ion-row class="ion-align-items-center">
         <ion-column>
         <h2> Rainforests </h2>
         </ion-column>
         
         <ion-column>
<ion-buttons slot="end">

           <ion-icon name="share"></ion-icon>
           </ion-buttons>
         </ion-column>
           </ion-row>
         </ion-grid>
         <div class="video-views"> 142 Views </div>
         
        <h6> Sasha Snow | 3rd July, 2019 </h6>
        <div>
           <input type="checkbox" class="read-more-state" id="expand"/>
           <p class="read-more-wrap"> This is a video description which is much longer hence Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              <span class="read-more-target">
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              </span> 
           </p>
           <label for="expand" class="read-more-trigger"></label>
        </div>
    
        <div>
           <h5> Similar categories </h5>
           <div class="chip">
              <ion-chip>
                 <ion-label> History </ion-label>
              </ion-chip>
              <ion-chip>
                 <ion-label> Nature </ion-label>
              </ion-chip>
              <ion-chip>
                 <ion-label> Travel </ion-label>
              </ion-chip>
              <ion-chip>
                 <ion-label> Adventure </ion-label>
              </ion-chip>
           </div>
        </div>
         <br>
         <br>

           <!--Similar videos start here-->

         <h2> Similar Videos</h2>
      <ion-grid>
         <ion-row>
           <ion-col>
             <ion-card>
                 <img src= "https://cdn.glitch.com/f4feab55-7fa5-4924-972f-c40e285456cf%2Fbig2-withtext-fish.png?1558912173485"/>
             </ion-card>
           </ion-col>
          </ion-row>
        
          <ion-row>
 
           <ion-col>
             <ion-card>
                 <img src= "https://cdn.glitch.com/f4feab55-7fa5-4924-972f-c40e285456cf%2Fsmall-4-sea-flower.png?1558912206624"/>
             </ion-card>
           </ion-col>
           <ion-col>
             <ion-card>
                 <img src= "https://cdn.glitch.com/f4feab55-7fa5-4924-972f-c40e285456cf%2Fsmall-mountains-3.png?1558912291117"/>
             </ion-card>
           </ion-col>
          </ion-row>
       </ion-grid>
         <br>
         <br>
 
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
       </ion-content>
         `

    }
}


customElements.define('videos-page', VideosPage);
