import 'swiper/css';
import "swiper/css/pagination";
import "./styles/index.scss";
import axios from "axios";
import Swiper, {Pagination} from "swiper";
import MainBannerList from "./js/mainBannerList";
import ProductList from "./js/productList";
import BannerList from "./js/bannerList";
import TabList from "./js/tabCategory";
import CoordiList from "./js/coordiList";
import UpdateNewsList from "./js/updateNewsList";

//메인 비주얼
axios.get('./MainBanner.json')
    .then(function (response) {
        // console.log(response);
        document.querySelector(".main-visual").appendChild(MainBannerList({ MainBannerList: response.data }));
        const pagination = document.createElement("div");
        pagination.className = 'swiper-pagination';
        document.querySelector(".main-visual").appendChild(pagination);

        const swiper = new Swiper('.main-visual', {
            // Optional parameters
            modules: [Pagination],
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            }
        });
        setTimeout(swiper.update(), 1000);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

//탭 카테고리
axios.get('./TabCategory.json')
    .then(function (response) {
        // console.log(response);
        document.querySelector(".tab-category.ranking").appendChild(TabList( response.data ));
        document.querySelector(".tab-category.coordi-01").appendChild(TabList( response.data ));
        document.querySelector(".tab-category.coordi-02").appendChild(TabList( response.data ));
        const swiper = new Swiper('.tab-category', {
            direction: "horizontal",
            slidesPerView: "auto",
            freeMode: true,
            slideToClickedSlide: true,
            loop:true,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true
            }
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

//탭
window.addEventListener("load", function() {
    // store tabs variable
    const myTabs = document.querySelectorAll(".tab-btn");
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
            myTabs[i].setAttribute('aria-selected','false' );
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        clickedTab.setAttribute('aria-selected','true' );
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-content");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
            myContentPanes[i].setAttribute('aria-selected','false' );
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
        myTabs[i].setAttribute('aria-selected','true' );
    }
    for (var i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks);
    }
});

//상품 리스트
axios.get('./Product.json')
    .then(function (response) {
        // console.log(response);
        document.querySelector(".product.first").appendChild(ProductList({ ProductList: response.data['first'] }));
        document.querySelector(".product.second").appendChild(ProductList({ ProductList: response.data['second'] }));
        document.querySelector(".product.third").appendChild(ProductList({ ProductList: response.data['third'] }));
        document.querySelector(".product.fourth").appendChild(ProductList({ ProductList: response.data['fourth'] }));
        document.querySelector(".product.fifth").appendChild(ProductList({ ProductList: response.data['fifth'] }));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

//코디 리스트
axios.get('./Coordi.json')
    .then(function (response) {
        // console.log(response);
        document.querySelector(".coordi.first").appendChild(CoordiList({ CoordiList: response.data['first'] }));
        document.querySelector(".coordi.second").appendChild(CoordiList({ CoordiList: response.data['second'] }));
        document.querySelector(".coordi.second .coordi-list").appendChild(CoordiList({ CoordiList: response.data['menu'] }));
        document.querySelector(".coordi.second").appendChild(CoordiList({ CoordiList: response.data['third'] }));
        document.querySelector(".coordi.third").appendChild(CoordiList({ CoordiList: response.data['fifth'] }));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

//코디 리스트
axios.get('./UpdateNews.json')
    .then(function (response) {
        // console.log(response);
        document.querySelector(".update-news").appendChild(UpdateNewsList({ UpdateNewsList: response.data }));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

//서브 배너
axios.get('./Banner.json')
    .then(function (response) {
        //console.log(response);

        document.querySelectorAll(".banner").forEach((a, i) => {
            var pagination = document.createElement("div");
            pagination.className = 'swiper-pagination';
            a.appendChild(pagination);
        });

        document.querySelector(".banner.type-01").appendChild(BannerList({ BannerList: response.data['type-01'] }));
        document.querySelector(".banner.type-02").appendChild(BannerList({ BannerList: response.data['type-02'] }));
        document.querySelector(".banner.type-03").appendChild(BannerList({ BannerList: response.data['type-03'] }));
        document.querySelector(".banner.type-04").appendChild(BannerList({ BannerList: response.data['type-04'] }));
        document.querySelector(".banner.type-05").appendChild(BannerList({ BannerList: response.data['type-04'] }));
        document.querySelector(".banner.type-06").appendChild(BannerList({ BannerList: response.data['type-02'] }));
        document.querySelector(".banner.type-07").appendChild(BannerList({ BannerList: response.data['type-03'] }));
        const swiper = new Swiper('.banner', {
            // Optional parameters
            modules: [Pagination],
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: ".swiper-pagination"
            }
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

document.getElementById("tab-ranking").appendChild(ranking);
