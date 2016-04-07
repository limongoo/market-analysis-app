console.log("start");

var img = ['bag.jpg', 'banana.jpg', 'boots.jpg', 'chair.jpg', 'cthulhu.jpg', 'dragon.jpg', 'pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'unicorn.jpg', 'usb.jpg', 'water_can.jpg', 'wine_glass.jpg'];


// Random image function
function getRandom() {
    var random =  Math.floor(Math.random() * img.length);

    var imgLeft = document.getElementById('img1').src = "img/" + img[random];
    var imgMid = document.getElementById('img2').src = "img/" + img[random];
    var imgRight = document.getElementById('img3').src = "img/" + img[random];


}
getRandom();

// Display img function




// Tally function
