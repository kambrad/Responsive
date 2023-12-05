const { log } = console;

const nav = document.getElementsByTagName("nav")[0];

const futureBanner = document.getElementById("future-banner").getElementsByTagName("h1")[0];

const carouselText = document.getElementsByClassName("carousel-text-container")[0].getElementsByTagName("h1")[0];

const navMenu = document.getElementsByClassName("nav-menu")[0];

var carImageHolder = document.querySelector(".location .drive .gas .car-overflow img");





Object.prototype.scrollTop = function(element) {
    var w = this;
    var scrollTopPosition = 0;
    w.addEventListener("scroll", (e) => {
        var scrollY = w.pageYOffset || document.documentElement.scrollTop;
        if (scrollY > scrollTopPosition) 
            element.style.top = "-200px";
        else {
            element.style.top = "0px";
        }
        scrollTopPosition = scrollY;
    })
}


Object.prototype.parallaxTag = function (element) {
    this.addEventListener("scroll", (e) => {
        // let scrollTop = -400 + this.scrollY;

        // element.style.left = (`-${scrollTop}px`);
        element.style.left = -this.scrollY * 0.65 + 'px';
    })
}

let s = 0;
Object.prototype.parallaxBannerOne= function (element) {
    this.addEventListener("scroll", (e) => {
        let scrollTop = this.scrollY - 4200;

        element.style.left = scrollTop * 0.25 + 'px';

    })
}

Object.prototype.parallaxBannerTwo = function (element) {
    this.addEventListener("scroll", (e) => {
        let scrollTop = -this.scrollY + 4200;

        element.style.left = scrollTop * 0.25 + 'px';

    })
}

Object.prototype.scrollHeader = function (element)
{
  this.addEventListener('scroll', (e) => {
    let scrollValue = this.scrollY / 100;
    

    element.style.transform = `translateX(${-scrollValue}%)`;
  })
}

Object.prototype.animateHoverNoneElements = function (ele) 
{
    if (typeof ele == "object") {
        ele.style.top = Math.max(100, window.scrollY - 100) + 'px';
        // document.querySelector(".property-footer h1").style.transform = "translateX(" + (window.scrollY - 9000 * 0.8) + "px)";
    }
}

Object.prototype.showNav = function (ele) {
    let _nav = null || undefined, count = 0, navSpanOne, navSpanTwo;
    navSpanOne = _nav == null ? ele.getElementsByTagName("span")[count] : [];
    navSpanTwo = _nav == null ? ele.getElementsByTagName("span")[count + 1] : [];

    typeof ele == "object" ? _nav = ele : {};
    _nav.addEventListener("click", (e) => {
        while (count < 2) {
            if (count == 0) {
                // click menu once and collapse menu 
                // prepare for translation
                break;
            }
        }
    })
}


window.scrollTop(nav);

window.parallaxTag(futureBanner);

window.parallaxBannerOne(document.querySelector(".ballance .ballance-banner .ballance-banner-overflow h1:nth-child(1)"));
window.parallaxBannerTwo(document.querySelector(".ballance .ballance-banner .ballance-banner-overflow h1:nth-child(2)"));

navMenu.showNav(navMenu);

document.body.onscroll = () => {
    document.body.animateHoverNoneElements(carImageHolder);
    window.scrollHeader(carouselText);
}

// window.scrollHeader(carouselText);


