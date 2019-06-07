class videoDetails extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` <ion-content>
        <iframe class="iframe-container" src="https://www.youtube.com/embed/ELQh3z4KrXk" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <!--Video details start here-->

        <div class="ion-margin-start">
            <ion-grid>
                <ion-row class="ion-align-items-center">
                    <ion-column>
                        <h3> Rainforests </h3>
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
                <input type="checkbox" class="read-more-state" id="expand" />
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