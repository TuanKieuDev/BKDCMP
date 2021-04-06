const style=`
    .container{
        color: #fff;
    height: 40vh;
    background-size: 100%;
        background-image: url("https://ctsv.hust.edu.vn/static/img/backgroup-rank.f1985ecd.jpg")
    }
    .main{
        height:100%;
    }
`

class Event extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="container">
            <div class="main">
            
            </div>
        </div>
        `
    }
}

window.customElements.define('event-area',Event)