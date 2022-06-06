// js content

// counter set to 5 so autoChangeImage will start on first image
let counter = 5;
const displayedImage = document.querySelector('#images');

// image elements
const img0 = createImg('img1', "./assets/img1.jpg");
const img1 = createImg('img2', "./assets/img2.jpg");
const img2 = createImg('img3', "./assets/img3.jpg");
const img3 = createImg('img4', "./assets/img4.jpg");
const img4 = createImg('img5', "./assets/img5.jpg");
const img5 = createImg('img6', "./assets/img6.jpg");

const images = [img0,img1,img2,img3,img4,img5];

// dots below images
let dots = [];
createDot();
currentDot('add');

// initial image shown
displayedImage.appendChild(img0);

autoChangeImage();

document.addEventListener('click', function (e) {

	if (e.target.matches('#leftArrow')) {
		leftArrow();
        console.log(counter);
	}

    if (e.target.matches('#rightArrow')) {
		rightArrow();
        console.log(counter);
	}

    if (e.target.matches('.dot')) {
        selectDot(e);
        console.log(counter);
    }

}, false);

// click left or right arrow
function leftArrow() {
    currentDot('remove');
    if (counter < 1) {
        counter = 5;
    } else {
        counter -= 1;
    }
    const child = document.querySelector('.displayImage');
    displayedImage.removeChild(child);
    displayedImage.appendChild(images[counter]);
    currentDot('add');
}

function rightArrow() {
    currentDot('remove');
    if (counter === 5) {
        counter = 0;
    } else {
        counter += 1;
    }
    const child = document.querySelector('.displayImage');
    displayedImage.removeChild(child);
    displayedImage.appendChild(images[counter]);
    currentDot('add');

    // setTimeout(rightArrow,3000);
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

// create dots to select img
function createDot() {
    const dotsDiv = document.querySelector('#dots');
    for (let i=0; i < images.length; i++) {
        const button = document.createElement('button');
        button.classList.add('dot');
        button.setAttribute('id',`dot${i}`);
        dots.push(button);
        dotsDiv.append(button);
    }
}

// select dot
function selectDot(e) {
    currentDot('remove');
    for (let i=0; i < images.length; i++) {
        if (e.target === document.getElementById(`dot${i}`)) {
            counter = i;

            // display selected image
            const child = document.querySelector('.displayImage');
            displayedImage.removeChild(child);
            displayedImage.appendChild(images[counter]);
        } else continue;
    }
    currentDot('add');
}

// highlight current image associated dot
function currentDot(addOrRemove) {
    const imageCounter = counter;
    const dot = document.querySelector(`#dot${imageCounter}`);
    if ( addOrRemove === 'add') {
        dot.classList.add('dot-currentImage');    
    } else if ( addOrRemove ==='remove') {
        dot.classList.remove('dot-currentImage');
    } else return;
}

// Auto change image
function autoChangeImage() {
    currentDot('remove');
    if (counter === 5) {
        counter = 0;
    } else {
        counter += 1;
    }
    const child = document.querySelector('.displayImage');
    displayedImage.removeChild(child);
    displayedImage.appendChild(images[counter]);
    currentDot('add');
    setTimeout(autoChangeImage, 5000);
}