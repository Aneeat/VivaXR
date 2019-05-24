class VideosPage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `Video Test`

    }
}


customElements.define('videos-page', VideosPage);
