class UploadVideosPage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` <ion-col>
        <h2 align="center">Create</h2>
        <ion-col>
           <ion-grid>
           <ion-row>
              <ion-col>
                 <ion-card>
                    <img src= "/assets/Upload video (2).png"/>
                 </ion-card>
              </ion-col>
           </ion-row>
           <ion-item>
              <ion-label position="floating">Video Title</ion-label>
              <ion-input></ion-input>
           </ion-item>
           <ion-item>
              <ion-label position="floating">Video Description</ion-label>
              <ion-input></ion-input>
           </ion-item>
           <div>
           <div>
           <h4>Add Categories</h4>
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
        <ion-item>
           <ion-label position="floating">Add tags</ion-label>
           <ion-input></ion-input>
        </ion-item>
        <ion-input></ion-input>
        <div>
        <div>
        </div>
       <footer-component></footer-component>
         `

    }
}


customElements.define('upload-videos-page', UploadVideosPage);