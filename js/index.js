
    const allcontainer = gsap.utils.toArray(".container-item");
    const venueImageWrap = document.querySelector(".container-img-wrap");
    const venueImage = document.querySelector(".container-img");

    function initcontainer() {
    allcontainer.forEach((link) => {
        link.addEventListener("mouseenter", venueHover);
        link.addEventListener("mouseleave", venueHover);
        link.addEventListener("mousemove", moveVenueImage)
    });
}

    function moveVenueImage(e) {
    let xpos = e.clientX;
    let ypos = e.clientY;
    const tl = gsap.timeline();
    tl.to(venueImageWrap, {
    x:xpos,
    y:ypos,
});
}

    function venueHover(e) {
    if(e.type === "mouseenter"){
    const colorThief = new ColorThief();
    const targetImage = e.target.dataset.img;
    venueImage.src = targetImage;
    const tl = gsap.timeline();
    venueImage.onload = () => {
    document.body.style.backgroundColor = `rgb(${colorThief.getColor(venueImage)})`
    e.target.children[0].style.color = "var(--color-green)";
}
    tl.to(venueImageWrap,{
    duration: 0.5,
    autoAlpha: 1,
});
} else if (e.type === "mouseleave"){
    const tl = gsap.timeline();
    document.body.style.backgroundColor = "var(--color-main)";
    e.target.children[0].style.color = "var(--color-black)";
    tl.to(venueImageWrap, {
    duration: 0.5,
    autoAlpha: 0,
});
}
}

    function init() {
    initcontainer();
}


    window.addEventListener("load", function (){
        init();
    });

    tl = new TimelineMax();

    tl.from(".site-logo", 1.3, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
});
    tl.from(".site-info, .menu-item", 0.5, {
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
});

    // tl.staggerFrom(
    //     ".site-menu > div",
    //     1,
    //     {
    //         opacity: 0,
    //         y: 60,
    //         ease: Power2.easeOut,
    //     },
    //     0.2
    // );

    tl.staggerFrom(
    ".header > div",
    0.8,
{
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
},

    );