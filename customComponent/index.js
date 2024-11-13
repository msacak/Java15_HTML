class MyElement extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 'Merhaba arkadaşlar';
        this.innerHTML += '<h2>kimsiniz</h2>';
        this.innerHTML += 'ben...'+ this.getAttribute('name')+'<br>';
        this.innerHTML += '<b>önemli burası</b>';
    }
}

customElements.define('benim-ozel-elementim',MyElement)