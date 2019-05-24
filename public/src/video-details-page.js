class videoDetails extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ` hi thesae are videos`

    }
}

customElements.define('video-page', videoDetails);