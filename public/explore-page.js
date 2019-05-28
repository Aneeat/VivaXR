class ExplorePage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `this is explore`

    }
}
customElements.define('explore-page', explorePage);