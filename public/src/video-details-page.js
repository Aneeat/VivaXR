class videoDetails extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` <ion-content>
        <iframe class="iframe-container" src="https://www.youtube.com/embed/ELQh3z4KrXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <!--Video details start here-->

        <div class="ion-margin-start">
            <ion-grid>
                <ion-row>
                    <ion-column>
                    <h2> Rainforests </h2>
                    </ion-column>

                    <ion-column>
                        <ion-buttons class="share-icon-video-page">
                            <ion-icon name="share" color="primary"></ion-icon>
                        </ion-buttons>
                    </ion-column>
                </ion-row>
            </ion-grid>
            <ion-row>
            <div class="video-views"> 142 Views </div>
            </ion-row>

            <h7> Sasha Snow | 3rd July, 2019 </h7>
            <div>
                <input type="checkbox" class="read-more-state" id="expand" />
                <p class="read-more-wrap"> Escape to the lush Temperate Rain forest of Southern NSW Australia in virtual reality 360 video with nature audio sounds recorded on  
                    <span class="read-more-target">
                    location. Hear the tranquil sounds of flowing water and the mating song of the lyrebird mimicking local birds. Look around the old Gondwanaland rainforest and giant fig tree. A short escape meditation in the back to nature series. 
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
                            <img src="assets/big2-withtext-fish.png" />
                        </ion-card>
                    </ion-col>
                </ion-row>

                <ion-row>

                    <ion-col>
                        <ion-card>
                            <img src=".assets/small-4-sea-flower.png" />
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card>
                            <img src="assets/small-mountains-3.png" />
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
                            <img src="assets/bigwithtext-flyingthrough.png" />
                        </ion-card>

                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>

                        <ion-card>
                            <img src="./assets/walkin-mountains-small.png" />
                        </ion-card>

                    </ion-col>
                    <ion-col>
                        <ion-card>
                            <img src="assets/small2-with text.png" />
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <footer-component></footer-component>
            </ion-content>
            `

    }
}

customElements.define('video-details-page', videoDetails);