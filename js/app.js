console.log("start");


// Global variables
var imgOne = document.getElementById('img1');
var imgTwo = document.getElementById('img2');
var imgThree = document.getElementById('img3');
var productImage = [];


// Object Constructor
var product = function(productName, imgPath) {
  this.productName = productName;
  this.label = productName;
  this.imgPath = imgPath;
  this.counter = 0;
  this.y = 0;
  productImage.push(this);
}


// Image Objects
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
  imgOne.dataset.index = img1; // putting img1 into dataset.index

  img2 = getRandom();
    while (img2 === img1) {
      img2 = getRandom();
    };
  imgTwo.src = productImage[img2].imgPath;
  imgTwo.dataset.index = img2; // putting img2 into dataset.index

  img3 = getRandom();
    while (img3 === img2 || img3 === img1) {
      img3 = getRandom();
    }
  imgThree.src = productImage[img3].imgPath;
  imgThree.dataset.index = img3; // putting img3 into dataset.index

  console.log(productImage[img1]);
  console.log(productImage[img2]);
  console.log(productImage[img3]);
}
display();


// Click event listener
imgOne.addEventListener('click', counterClick);
imgTwo.addEventListener('click', counterClick);
imgThree.addEventListener('click', counterClick);



// Counter variables set to 0
var totalClick = 0;
var img1 = 0;
var img2 = 0;
var img3 = 0;


// counterClick function
function counterClick() {
  var index = event.target.dataset.index;
  productImage[index].y++;
  totalClick++;

  // Local Storage
  localStorage.setItem('datadata', JSON.stringify(productImage));

  if (totalClick === 15) { // if 15 clicks, change class attribute
    resultButton.setAttribute('class', 'button-primary'); // remove hidden attribute of resultButton if 15 clicks
    clearButton.setAttribute('class', 'button-primary'); // remove hidden attribute of clearButton if 15 clicks
  }
  document.getElementById('counterText').innerHTML = "Vote Counter: " + totalClick + " of 15"; // Show # of 15 text
  display(); // calls display function again on click
}


// Button for showResults and event listener
var resultButton = document.getElementById('showResults'); // reference to showResults
resultButton.addEventListener('click', changeSomething); // event listener, click and run resultDisplay function


// Clear Result Button
var clearButton = document.getElementById('resetData');  // reference to resetData
clearButton.addEventListener('click', clearSomething);  // event listener, click and run clearSomething function


// ClearSomething function
function clearSomething() {
  localStorage.clear();  // clear local storage
  for (product of productImage){  // for loop to go through productImage and set y = 0
    product.y = 0;  // set store y value to 0
  }
  chart.render();  // render chart
};


// Local Storage get item
var retrieve = localStorage.getItem('datadata');  // get datadata
if (retrieve != null) {  // if false. if retrieve not null, parse retrieve
  productImage = JSON.parse(retrieve);  // parse data
};


// Chart Stuff
var chart = null;
window.onload = function () {

  chart = new CanvasJS.Chart("chartContainer", {

    title: {text: "Clicks Per Photo Results"},
    data: [//array of dataSeries
      /*** Change type "column" to "bar", "area", "line" or "pie"***/
            {
             type: "column",
             dataPoints: productImage // reference to array to plug into canvas chart
            }
          ]
   });
}


// changeSomething function
function changeSomething() {  // function when click on resultButton
  chart.render();  // render chart
  document.getElementById('chartContainer').setAttribute('class', "container"); // get rid of hidden class
}


console.log("end");
