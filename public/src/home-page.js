

class HomePage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        
        this.innerHTML = `test`

    }
}


customElements.define('home-page', HomePage);

