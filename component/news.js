const style=`
    .container{
        margin-left: -10px;
        margin-right: -10px;
        display: flex;
        margin-bottom:15px;
    }
    .left-column{
        padding-left: 10px;
        padding-right: 10px;
        word-wrap:break-word;
        width: 66.66667%;
    }
    .right-column{
        padding-left: 10px;
        padding-right: 10px;
        word-wrap:break-word;
        width: 33.33333%;
    }
    h2{
        font-weight: 500;
        text-transform: uppercase;
        color: #130f40;
        font-size: 21px;
    }
    .news-container{
        background-color: rgb(243, 243, 243);
        position:relative;
        display:flex;
    }
    .h4{
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .content{
        font-size: 14px;
        line-height: 22px;
    
    }
    img{
        border-style: none;
    }
    .image{
        width: 50%;
    }
    .text{
        width:50%;
        padding: 15px;
    }
    .slide {
        height: 287px;
        position: relative;
    }
    #content-event{
        position: absolute;
        left: 0;
        bottom: 9px;
        width: 100%;
        background-color: rgba(0,0,0,.7);
        cursor:pointer;
    }
    .date{
    padding: 5px 10px;
    width: max-content;
    color: white;
    font-size: 14px;
    background-color: rgba(8, 56, 127, 0.5);
    }
    .title{
        padding: 5px;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    }
    .time{
        padding: 5px;
        font-size: 12px;
        color: white;
        font-style: italic;
    }
    .slide img{
        height: 97%;
    }

    @media screen and (max-width: 767px){
        .container{
            display:contents;
        }
        .left-column{
            width:100%;
        }
        .right-column{
            width:100%;
        }
    }
`

class News extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
            <div class="container">
                <div class="left-column">
                   <h2 class="h2">ch??o m???ng ?????n v???i c???ng th??ng tin sinh vi??n</h2>
                   <div class="news-container">
                        <div class="image">
                            <img src="https://ctsv.hust.edu.vn/img/BK.jpg" width="100%"/>
                        </div>
                        <div class="text">
                            <h4 class="h4">Gi???i thi???u C??ng t??c Sinh vi??n</h4>
                            <div class="content">
                                Tr?????ng ??HBK H?? N???i coi c??ng t??c sinh vi??n l?? m???t trong nh???ng nhi???m v??? tr???ng t??m c???a Tr?????ng. Ban Gi??m hi???u lu??n quan t??m, ch??? ?????o s??t sao v??? c??ng t??c chuy??n m??n nghi???p v??? nh???m t???o ??i???u ki???n thu???n l???i cho sinh vi??n ???????c h???c t???p trong m??i tr?????ng t???t nh???t, ???????c nghi??n c???u khoa h???c, tu d?????ng v?? r??n luy???n t??c phong, ?????o ?????c, tham gia c??c phong tr??o Th??? thao - V??n h??a v?? c??c ho???t ?????ng x?? h???i kh??c
                            </div>
                        </div>
                   </div>
                </div>
                <div class="right-column">
                    <h2 class="h2">s??? ki???n</h2>
                    <div class="slide">
                        <img src="https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadImageAcitivity?AId=559" width="100%"/>
                        <a href="https://ctsv.hust.edu.vn/#/hoat-dong/559/chi-tiet"></a>
                        <div id="content-event">
                            <div class="date">
                                28/12/2020
                            </div>
                            <div class="title">
                                H???i th???o h?????ng nghi???p ??hbkhn
                            </div>
                            <div class="time">
                                00:00, Online
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

window.customElements.define('news-demo',News)