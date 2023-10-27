const { log } = console;

const nav = document.getElementsByTagName("nav")[0];

const futureBanner = document.getElementById("future-banner").getElementsByTagName("h1")[0];

const carouselText = document.getElementsByClassName("carousel-text-container")[0].getElementsByTagName("h1")[0];



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
        let scrollTop = -400 + this.scrollY;

        // log (scrollTop);

        element.style.left = (`-${scrollTop}px`);
    })
}

let s = 0;
Object.prototype.parallaxBannerOne= function (element) {
    this.addEventListener("scroll", (e) => {
        let scrollTop = this.scrollY - 4200;

        // log (scrollTop);

        element.style.left = `${scrollTop}px`;

    })
}

Object.prototype.parallaxBannerTwo = function (element) {
    this.addEventListener("scroll", (e) => {
        let scrollTop = -this.scrollY + 4200;

        // log (scrollTop);

        element.style.left = `${scrollTop}px`;

    })
}

Object.prototype.scrollHeader = function (element)
{
  this.addEventListener('scroll', (e) => {
    let scrollValue = this.scrollY / 100;
    log (scrollValue);
    element.style.right = `${scrollValue += 5}%`;
  })
}



window.scrollTop(nav);

window.parallaxTag(futureBanner);

window.parallaxBannerOne(document.querySelector(".ballance .ballance-banner .ballance-banner-overflow h1:nth-child(1)"));
window.parallaxBannerTwo(document.querySelector(".ballance .ballance-banner .ballance-banner-overflow h1:nth-child(2)"));
// log (document.querySelector(".ballance .ballance-banner .ballance-banner-overflow h1:nth-child(1)"));

// window.scrollCarouselText(carouselText);

window.scrollHeader(carouselText);


