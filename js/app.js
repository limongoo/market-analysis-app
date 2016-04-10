console.log("start");

// Global variables
var imgOne = document.getElementById('img1');
var imgTwo = document.getElementById('img2');
var imgThree = document.getElementById('img3');
var productImage = [];


// Object Constructor
var product = function(productName, imgPath) {
  this.productName = productName;
  this.imgPath = imgPath;
  this.counter = 0;
  productImage.push(this);
}


// Images
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
}


// Display img function
function display () {
  img1 = getRandom();
  imgOne.src = productImage[img1].imgPath;

  img2 = getRandom();
    while (img2 === img1) {
      img2 = getRandom();
    };
  imgTwo.src = productImage[img2].imgPath;

  img3 = getRandom();
    while (img3 === img2 || img3 === img1) {
      img3 = getRandom();
    }
  imgThree.src = productImage[img3].imgPath;

  console.log(productImage[img1]);
  console.log(productImage[img2]);
  console.log(productImage[img3]);
}
display();


// Click event listener
imgOne.addEventListener('click', counterClick);
imgTwo.addEventListener('click', counterClick);
imgThree.addEventListener('click', counterClick);



// Counter variables
var totalClick = 0;
var img1 = 0;
var img2 = 0;
var img3 = 0;


// counterClick function
function counterClick() {
  productImage[img1].counter++;
  productImage[img2].counter++;
  productImage[img3].counter++;
  totalClick++;

  if (totalClick === 15) { // if 15 clicks, do remove attribute
    resultButton.removeAttribute('hidden'); // remove hidden attribute of resultButton if 15 clicks
  }
  // console.log(productImage[img1].productName);
  // console.log(productImage[img2].productName);
  // console.log(productImage[img3].productName);
  console.log(totalClick);
  document.getElementById('counterText').innerHTML = "You can view the results after 15 votes. Vote Counter: " + totalClick + " of 15";
  display(); // calls display function again on click
}


// Button for showResults
var resultButton = document.getElementById('showResults'); // reference to showResults
resultButton.addEventListener('click', resultDisplay); // event listener, click and run resultDisplay function


// resultDisplay function
function resultDisplay() {
  var results = document.getElementById('displayResults'); // reference to Id
  displayResults.removeAttribute('hidden'); // remove hidden
  console.log('display test');

  var ul = document.createElement('ul'); // create ul list
  document.getElementById('displayResults').appendChild(ul); // add ul to div displayResults



  for (i=0; i < productImage.length; i++) {
  var li = document.createElement('li'); // create li element
  // var showName = productImage[img1].productName;
  // var showNameCounter = productImage[img1].counter;


  var showName = productImage[i].productName;
  var showNameCounter = productImage[i].counter;


  var productTotal = showName + " " +showNameCounter;

  productTotal = document.createTextNode(productTotal);
  li.appendChild(productTotal);

  document.getElementById('displayResults').appendChild(li); // add li to ul
  }
}


// imgOne.addEventListener('click', click1);
// imgTwo.addEventListener('click', click2);
// imgThree.addEventListener('click', click3);

// function click1() {
//   productImage[img1].counter++;
//   totalClick++;
//   console.log(productImage[img1].productName);
//   console.log(totalClick);
//   display();
// }
// function click2() {
//   productImage[img2].counter++;
//   totalClick++;
//   console.log(productImage[img2].productName);
//   console.log(totalClick);
//   display();
// }
// function click3() {
//   productImage[img3].counter++;
//   totalClick++;
//   console.log(productImage[img3].productName);
//   console.log(totalClick);
//   display();
// }






// Display Result

console.log("end");
