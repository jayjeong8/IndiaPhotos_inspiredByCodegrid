const inpageImgContainer = document.querySelector(".inpage-img-container");


for (let i = 1; i <= 37; i++) {
    let inpageImage = document.createElement("img");
    inpageImage.src = `./india-photos/person/image-${i}.jpg`;
    inpageImage.classList.add('inpage-image',);
    inpageImage.loading = 'lazy';
    inpageImgContainer.appendChild(inpageImage);
}
