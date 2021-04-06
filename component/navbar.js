const style=`
    .container{
        height: 100%;
        background-color: rgb(34, 34, 34);
        overflow: hidden;
        position: relative;
    }
    .detail{
        display: flex;
        padding-left: 150px;
    color: #fff!important;
    text-transform: uppercase;
    list-style-type:none;
    font-size:14px;
    }
    .detail li{
        margin:2.5px 20px;
        overflow: hidden;
        cursor:pointer;
    }
`
class menu extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
            <div class="container">
                <ul class="detail">
                    <li style="color:rgb(218, 37, 29);">trang chủ</li>
                    <li>ngoại khóa</li>
                    <li>tuyển dụng</li>
                    <li>học bổng</li>
                    <li>chấm điểm</li>
                    <li>hành chính</li>
                    <li>app ictsv</li>
                </ul>
            </div>
        `
    }
}

window.customElements.define('nav-bar',menu)