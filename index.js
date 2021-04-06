import './component/header.js'
import './component/navbar.js'
import './component/banner.js'
import './component/news.js'
import './component/card-company.js'
import './component/table-card.js'
import './component/search.js'
import './component/event.js'
const style=`
    .home-page{
        padding: 0 150px;
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
    .job{
        display:flex;
    }
`
document.getElementById("app").innerHTML=`
    <style>${style}</style>
    <bk-header></bk-header>
    <nav-bar></nav-bar>
    <div class="home-page">
    <banner-page></banner-page>
    <news-demo></news-demo>
    <div class="job">
        <div class="left-column">
            <table-card></table-card>
        </div>
        <div class="right-column">
            <search-box></search-box>
        </div>
    </div>
    <event-area></event-area>
    </div>

`
