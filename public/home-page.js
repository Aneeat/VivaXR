class HomePage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `hey this is home`
    

    }
}


customElements.define('home-page', HomePage);