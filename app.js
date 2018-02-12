// SOME CHANGES FOR FIRST PUSH  

// CREATE FUNCTION THAT SELECTS 3 RANDOM PHOTOS

// The feature you want to build today will start with selecting three random photos from the image directory and displaying them side-by-side-by-side in the browser window. The same image should not be shown twice in this group of three.
// 

// In addition, you'll want the user to be able to click on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

// After an image is clicked, three new random images need to be automatically displayed.

// After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting) and display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".

// To do this, you'll want to use the following:

// a constructor function that creates an object associated with each product, and has (at a minimum) properties for the name of the product (to be used for display purposes), the filepath to its image, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML, as well.
const imgObject = {
    busItems: [],
    start: function() {
        this.busItems.push(
            new BusItem ('bag','images/bag.jpg'),
            new BusItem ('banana','images/banana.jpg'),
            new BusItem ('bathroom','images/bathroom.jpg'),
            new BusItem ('boots','images/boots.jpg'),
            new BusItem ('breakfast','images/breakfast.jpg'),
            new BusItem ('bubblegum','images/bubblegum.jpg'),
            new BusItem ('chair','images/chair.jpg'),
            new BusItem ('cthulhu','images/cthulhu.jpg'),
            new BusItem ('dog-duck','images/dog-duck.jpg'),
            new BusItem ('dragon','images/dragon.jpg'),
            new BusItem ('pen','images/pen.jpg'),
            new BusItem ('pet-sweep','images/pet-sweep.jpg'),
            new BusItem ('scissors','images/scissors.jpg'),
            new BusItem ('shark','images/shark.jpg'),
            new BusItem ('sweep','images/sweep.png'),
            new BusItem ('tauntaun','images/tauntaun.jpg'),
            new BusItem ('unicorn','images/unicorn.jpg'),
            new BusItem ('usb','images/usb.jpg'),
            new BusItem ('water-can','images/water-can.jpg'),
            new BusItem ('wine-glass','images/wine-glass.jpg')
        )
    }
}

function BusItem (name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesChosen = 0;
    this.timesShown = 0;
    this.id = name
}


// a click handler to capture the user's clicks.