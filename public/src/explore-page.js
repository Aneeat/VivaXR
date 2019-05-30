class ExplorePage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        
        this.innerHTML = `<ion-content>
        <div>
           <img id="hero" src="https://firebasestorage.googleapis.com/v0/b/vivaxr-dbc49.appspot.com/o/Group%20(2).png?alt=media&token=64df7946-51e2-427c-b8f3-74abd929fea0">
        </div>
        <div>
        <div>
        <ion-col>
        <h2 align="center">Most Viewed</h2>
        <ion-col>
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
        <div>
        <div>
        <ion-col>
           <h2 align="center">Top Categories</h2>
           <ion-label>
           </ion-label>
        </ion-col>
        <ion-col size="4">
        </ion-col>
        <div>
        </div>
        <ion-col size="4">
        <ion-row>
        <div class="chip" align="center">
        <ion-chip>
           <ion-label> Latest</ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Most Viewed </ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Music </ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Dance </ion-label>
        </ion-chip>
        <div class="chip" align="center">
        <ion-chip>
           <ion-label> Nature </ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Animals </ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Theatre </ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Sci-Fi </ion-label>
        </ion-chip>
        <div class="chip">
        <ion-chip>
           <ion-label> Gaming</ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Most Viewed </ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> History</ion-label>
        </ion-chip>
        <ion-chip>
           <ion-label> Celebrity </ion-label>
        </ion-chip>
        <div class="chip">
           <ion-chip>
              <ion-label> Space </ion-label>
           </ion-chip>
           <ion-chip>
              <ion-label> Culture </ion-label>
           </ion-chip>
           <ion-chip>
              <ion-label> Arts </ion-label>
           </ion-chip>
           <ion-chip>
              <ion-label> Underwater </ion-label>
           </ion-chip>
        </div>
        <div>
        <div>
           <ion-col>
              <h2 align="center">Latest Uploads</h2>
              <ion-label>
              </ion-label>
           </ion-col>
           <ion-grid>
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
           <footer-component></footer-component>
        </div>`

    }
}


customElements.define('explore-page', ExplorePage);