class ExplorePage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        
        this.innerHTML = `explore test`

    }
}


customElements.define('explore-page', ExplorePage);