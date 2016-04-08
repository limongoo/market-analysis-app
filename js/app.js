console.log("start");

// Image array
var imgOne = document.getElementById('img1');
var imgTwo = document.getElementById('img2');
var imgThree = document.getElementById('img3');

var productImage = [];

var product = function(productName, imgPath) {
  this.productName = productName;
  this.imgPath = imgPath;
  this.counter = 0;
  productImage.push(this);
}

var bag = new product ('bag','img/bag.jpg');
var banana = new product ('banana','img/banana.jpg');
var boots = new product ('boots','img/boots.jpg');
var chair = new product ('chair','img/chair.jpg');
var cthulhu = new product ('cthulhu','img/cthulhu.jpg');
var dragon = new product ('dragon','img/dragon.jpg');
var pen = new product ('pen','img/pen.jpg');
var scissors = new product ('scissors','img/scissors.jpg');
var shark = new product ('shark','img/shark.jpg');
var sweep = new product ('sweep','img/sweep.jpg');
var unicorn = new product ('unicorn','img/unicorn.jpg');
var usb = new product ('usb','img/usb.jpg');
var watercan = new product ('watercan','img/water_can.jpg');
var wineglass = new product ('wineglass','img/wine_glass.jpg');





// Random image function
function getRandom() {
    return Math.floor(Math.random() * productImage.length);
    // var imgLeft = document.getElementById('img1').src = "img/" + img[random];
    // var imgMid = document.getElementById('img2').src = "img/" + img[random];
    // var imgRight = document.getElementById('img3').src = "img/" + img[random];
}


// Display img function
function display () {


  img1 = getRandom();
  // var i1 = imgOne.src = "img/" + img[img1];
  imgOne.src = productImage[img1].imgPath;

  img2 = getRandom();
    while (img2 === img1) {
      img2 = getRandom();
    };
  // var i2 = imgTwo.src = "img/" + img[img2];
  imgTwo.src = productImage[img2].imgPath;

  img3 = getRandom();
    while (img3 === img2 || img3 === img1) {
      img3 = getRandom();
    }
  // var i3 = imgThree.src = "img/" + img[img3];
  imgThree.src = productImage[img3].imgPath;

  console.log(productImage[img1]);
  console.log(productImage[img2]);
  console.log(productImage[img3]);
}
display();





imgOne.addEventListener('click', click1);
imgTwo.addEventListener('click', click2);
imgThree.addEventListener('click', click3);

// Counter function
var totalClick = 0;
var img1 = 0;
var img2 = 0;
var img3 = 0;

function click1() {
  productImage[img1].counter++;
  totalClick++;
  console.log(productImage[img1].productName);
  console.log(totalClick);
  display();
}
function click2() {
  productImage[img2].counter++;
  totalClick++;
  console.log(productImage[img2].productName);
  console.log(totalClick);
  display();
}
function click3() {
  productImage[img3].counter++;
  totalClick++;
  console.log(productImage[img3].productName);
  console.log(totalClick);
  display();
}


// function counterClick(product) {
//   product.counter++;
//   totalClick++;
//
//   // console.log("counter function");
//   // console.log(totalClick);
//
//   display();
// }


// Display Result
