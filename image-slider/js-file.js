// js content

const displayedImage = document.querySelector('#images');

document.addEventListener('click', function (e) {

	if (e.target.matches('#leftArrow')) {
		leftArrow();
        console.log(counter);
	}

    if (e.target.matches('#rightArrow')) {
		rightArrow();
        console.log(counter);
	}

}, false);

// image elements
const img0 = createImg('img1', "./assets/img1.jpg");
const img1 = createImg('img2', "./assets/img2.jpg");
const img2 = createImg('img3', "./assets/img3.jpg");
const img3 = createImg('img4', "./assets/img4.jpg");
const img4 = createImg('img5', "./assets/img5.jpg");
const img5 = createImg('img6', "./assets/img6.jpg");

const images = [img0,img1,img2,img3,img4,img5];

// initial image shown
displayedImage.appendChild(img0);
let counter = 0;

// click left or right arrow
function leftArrow() {
    if (counter < 1) {
        counter = 5;
    } else {
        counter -= 1;
    }
    const child = document.querySelector('.displayImage');
    displayedImage.removeChild(child);
    displayedImage.appendChild(images[counter]);
}

function rightArrow() {
    if (counter === 5) {
        counter = 0;
    } else {
        counter += 1;
    }
    const child = document.querySelector('.displayImage');
    displayedImage.removeChild(child);
    displayedImage.appendChild(images[counter]);
}

// create img html function
function createImg(className, source) {
    const img = document.createElement('img');
    img.classList.add(className);
    img.classList.add('displayImage');
    img.classList.add('fade-in');
    img.src = source;
    return img;
}


