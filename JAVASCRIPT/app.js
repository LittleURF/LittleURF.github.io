/*
--TO DO
- Make a small window asking if the user is here just to test, if so give him lots of pepes instantly
 div sticked to a side? with one button saying give me money! and one saying no, - closing the window

- Think of something for Paula to draw
- Make upgrades dissapear when player is far away from them(no item,
  earlier upgrade for this item is not yet bought)
- Add other upgrade types, all items effectivness, click effectivness
- Add statistics section
- Make buildings dissaper if player doesnt have the previous one(?) and money for it(?)
- Ascendances
- How to split it into files without creating global variables?
- If you dont wanna screw with splitting the code, get everything in this here file at the end!
!!!^
!!!^
- DESIGN

*/
(function(){

  
var pepes =  1000000;
var gpps = 0; // Global pepes per second


// if(localStorage.getItem("save") !== null){ // If a previous save exists, load it.
//   console.log('loading');
//   loadGame();
// }


function saveGame(){
  var save = {
    pepes: pepes,
    gpps: gpps,
    items: items,
    upgrades: upgrades,
  };
  localStorage.setItem("save", JSON.stringify(save));
}

function loadGame(){
  var save = JSON.parse(localStorage.getItem("save"));
  pepes = save.pepes;
  gpps = save.gpps;
  items = save.items;
  upgrades = save.upgrades;
  updateUi();
}

function updateUi(){ // Updates UI with loaded(from a save) things
  for (var i = 0; i < items.length; i++) {
    document.getElementById(items[i].id).querySelector('span.shop-item-amount').innerHTML = convertBigNumber(items[i].amount);
    document.getElementById(items[i].id).querySelector('span.shop-item-pps').innerHTML = 'PPS: ' + convertBigNumber(items[i].pps);
    document.getElementById(items[i].id).querySelector('span.shop-item-price').innerHTML = convertBigNumber(items[i].price);
    }

  for (var j = 0; j < upgrades.length; j++) {
    if (upgrades[j].bought === true)
    document.getElementById('upgrade' + j).style.display = 'none';
  }
}

var mainPepeButton = document.getElementById('main-pepe-button');
mainPepeButton.addEventListener("click", mainButtonClick, false);


function mainButtonClick() {

  pepes += 1;
}

function convertBigNumber(number){

  switch(true){
    case (number >= 1000000000000000000):
    number = (number / 1000000000000000000).toFixed(3) + ' S';
    break;
    case (number >= 1000000000000000):
      number = (number / 1000000000000000).toFixed(3) + ' Q';
      break;
    case (number >= 1000000000000):
      number = (number / 1000000000000).toFixed(3) + ' T';
      break;
    case (number >= 1000000000):
      number = (number / 1000000000).toFixed(3) + ' B';
      break;
    case (number >= 1000000):
      number = (number / 1000000).toFixed(3) + ' M';
      break;
    case (number >= 1000):
      number = (number / 1000).toFixed(3) + ' K';
      break;
  }
  return number;
}

function updateCookiesAndGppsUi() {
  var pepeCounter = document.getElementById('pepe-counter');
  pepeCounter.innerHTML = convertBigNumber(Math.round(pepes)) + ' Pepes';
  document.getElementById('gpps-counter').innerHTML = convertBigNumber(gpps) + ' PPS';
  // console.log(pepes);

  for (var i = 0; i < items.length; i++) { // goes through every item and lights it up if player has enough pepes to buy it
    if (pepes >= items[i].price){
      document.getElementById(items[i].id).style.opacity = '1';
      document.getElementById(items[i].id).style.filter = 'none';
    }
    else {
      document.getElementById(items[i].id).style.opacity = '0.45';
      document.getElementById(items[i].id).style.filter = 'grayscale(100%)';
    }
    if ( items[i].amount == 0) // If item is not bought, pps is greyed out
      document.getElementById(items[i].id).querySelector('span.shop-item-pps').style.opacity = '0.4';
    else
    document.getElementById(items[i].id).querySelector('span.shop-item-pps').style.opacity = '1';
  }
 

  for (var j = 0; j < upgradesDOM.length; j++){ // goes through every upgrade and lights it up if player has enough pepes to buy it
    var upgradePrice = upgradesDOM[j].querySelector('span.upgrade-price').innerHTML.replace(/\s/g, ''); // removes whitespace from the price
    if(pepes < upgrades[j].price){
      upgradesDOM[j].querySelector('span.upgrade-price').style.opacity ='0.4';
      upgradesDOM[j].querySelector('img').style.opacity = '0.4';
    }
    else {
      upgradesDOM[j].querySelector('span.upgrade-price').style.opacity ='1';
      upgradesDOM[j].querySelector('img').style.opacity = '1';
    }
  
  }
}


function updateGpps() {
  var toBeGpps = 0;
  for (var i = 0; i < items.length; i++) {
    toBeGpps += items[i].totalPps;
  }
  toBeGpps = Math.round(toBeGpps);
  gpps = toBeGpps;
  startOrRestartWorker();
 // updateCookiesAndGppsUi(); // It was once here but i think its useless, in case everything breaks, check if this is the reason
}



function updateItemsPps(item) {
  document.getElementById(item.id).querySelector('span.shop-item-pps').innerHTML = 'PPS: ' + convertBigNumber(item.totalPps);
}


function buyItem(item) {
  if (pepes >= item.price) {
    pepes -= item.price;
    item.amount++;
    item.price = Math.floor(item.firstPrice * Math.pow(1.2, item.amount))
    item.totalPps =item.amount * item.pps; // updates items total pps
    var itemDOM = document.getElementById(item.id)
    itemDOM.querySelector('span.shop-item-amount').innerHTML = convertBigNumber(item.amount); // updates amount on UI
    itemDOM.querySelector('span.shop-item-price').innerHTML = convertBigNumber(item.price); // updates price on UI
    updateGpps();
    updateItemsPps(item);
  }
}

for (var i = 0; i < items.length; i++){
  itemDOM[i].addEventListener("click", buyItem.bind(this, items[i]), false);
}

for (var j = 0; j < upgrades.length; j++){
  upgradesDOM[j].addEventListener("click", upgradeItem.bind(this, upgrades[j]), false);
}

function upgradeItem(upgrade) {
  if (pepes >= upgrade.price && upgrade.bought === false) {
    pepes -= upgrade.price;
    upgrade.bought = true;
    upgrade.upgradedItem.pps += Math.round((upgrade.upgradedItem.pps * (upgrade.effectivness / 100)) * 100) / 100;
    upgrade.upgradedItem.totalPps = upgrade.upgradedItem.amount * upgrade.upgradedItem.pps; // updates items total pps
    updateGpps();
    event.target.style.display = 'none'; // removes upgrade from UI
    updateItemsPps(upgrade.upgradedItem);
  }
}

var pepeCounterWorker;
function startOrRestartWorker(){

  if(pepeCounterWorker != undefined){ // If the worker is already made, it terminates it to make a new one, without it there are multiple workers all adding GPPS
    pepeCounterWorker.terminate();
  }
// This worker makes GPPS work even if the tab is not active
// this long boy down here? Dont ask, it has to do with chrome not beign able to load workers though.
pepeCounterWorker = new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], {type: 'text/javascript'}))); 
pepeCounterWorker.onmessage =  function(e) {
  pepes += e.data;
};

pepeCounterWorker.postMessage(gpps);
}
updateUi();
startOrRestartWorker();

setInterval(updateCookiesAndGppsUi, 10);
setInterval(saveGame, 3000);
})();