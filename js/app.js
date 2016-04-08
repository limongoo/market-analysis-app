console.log("start");

var img = ['bag.jpg', 'banana.jpg', 'boots.jpg', 'chair.jpg', 'cthulhu.jpg', 'dragon.jpg', 'pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'unicorn.jpg', 'usb.jpg', 'water_can.jpg', 'wine_glass.jpg'];


// Random image function
function getRandom() {
    return Math.floor(Math.random() * img.length);

    // var imgLeft = document.getElementById('img1').src = "img/" + img[random];
    // var imgMid = document.getElementById('img2').src = "img/" + img[random];
    // var imgRight = document.getElementById('img3').src = "img/" + img[random];

}


// Display img function
function display () {
  var imgOne = document.getElementById('img1')
  var imgTwo = document.getElementById('img2')
  var imgThree = document.getElementById('img3')

  img1 = getRandom();
  imgOne.src = "img/" + img[img1];

  img2 = getRandom();
  imgTwo.src = "img/" + img[img2];

  img3 = getRandom();
  imgThree.src = "img/" + img[img3];
}
display();



// Tally function
