// a constructor function that creates an object associated with each product, and has (at a minimum) properties for the name of the product (to be used for display purposes), the filepath to its image, the number of times it has been shown, and the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML, as well.

const imgObject = {
    bMI: [],
    start: function() {
        this.bMI.push(
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
            new BusItem ('usb','images/usb.gif'),
            new BusItem ('water-can','images/water-can.jpg'),
            new BusItem ('wine-glass','images/wine-glass.jpg')
        );
    },

    getRandomItem: function () {
        const selectedItems = [];
        console.table(selectedItems);
        while (selectedItems.length < 3) {
            const randomNumber = Math.floor(Math.random() * this.bMI.length);
            const item = this.bMI[randomNumber];
            if (!selectedItems.includes(item)){
                selectedItems.push(item);
            }
        }
        return selectedItems;
    },
    
    render: function () {
        const threeImg = this.getRandomItem();
        const list = document.getElementById("busMallItems");

        for (let j = 0; j < threeImg.length; j++ ){
            const ele = document.createElement('img');
            ele.src =  threeImg[j].imageUrl;
            ele.setAttribute('alt', threeImg[j].name);
            list.appendChild(ele);
        }
    }
};

imgObject.start();
imgObject.render();

function BusItem (name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.timesChosen = 0;
    this.timesShown = 0;
    this.id = name;
}