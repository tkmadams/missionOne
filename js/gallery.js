let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image,);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/thumbs/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");


            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "img/" + setNewImgUrl);

            newImg.onload = function() {
            let imgWidth = this.width;
            let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

            let newNextBtn =document.createElement("a");
            let btnNextText = document.createTextMode("Next");
            newNextBtn.appendChild(btnNextText);
            container.appendChild(newNextBtn);
            newNextBtn.setAttribute("class", "img-btn-next");
            newNextBtn.setAttribute("onclick", "changeImg()");
            newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

            let newPrevBtn =document.createElement("a");
            let btnPrevText = document.createTextMode("Prev");
            newPrevBtn.appendChild(btnPrevText);
            container.appendChild(newPrevBtn);
            newPrevBtn.setAttribute("class", "img-btn-prev");
            newPrevBtn.setAttribute("onclick", "changeImg()");
            newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
        }
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
}

