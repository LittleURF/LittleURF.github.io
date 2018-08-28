var items = [

  item0 = {
    id: 'item0',
    name: 'Feels Bad Man',
    firstPrice: 10, // price of the first bought item
    price: 10,
    pps: 1,
    amount: 0,
    totalPps: 0
  },

  item1 = {
    id: 'item1',
    name: 'MADE YOU LOOK',
    firstPrice: 250,
    price: 250,
    pps: 10,
    amount: 0,
    totalPps: 0
  },

  item2 = {
    id: 'item2',
    name: 'Salt',
    firstPrice: 2000,
    price: 2000,
    pps: 100,
    amount: 0,
    totalPps: 0
  },

  item3 = {
    id: 'item3',
    name: 'Wednesday Frog',
    firstPrice: 22500,
    price: 22500,
    pps: 1000,
    amount: 0,
    totalPps: 0
  },

  item4 = {
    id: 'item4',
    name: 'Kermit',
    firstPrice: 240700,
    price: 240700,
    pps: 5500,
    amount: 0,
    totalPps: 0
  },

  item5 = {
    id: 'item5',
    name: 'Spongebob',
    firstPrice: 2640000,
    price: 2640000,
    pps: 23000,
    amount: 0,
    totalPps: 0
  },

  item6 = {
    id: 'item6',
    name: 'Dat Boi',
    firstPrice: 31416000,
    price: 31416000,
    pps: 113000,
    amount: 0,
    totalPps: 0
  },

  item7 = {
    id: 'item7',
    name: 'Spooky Scary Skeleton',
    firstPrice: 398000000,
    price: 398000000,
    pps: 850000,
    amount: 0,
    totalPps: 0
  },

  item8 = {
    id: 'item8',
    name: 'Distracted Boyfriend',
    firstPrice: 5146880000,
    price: 5146880000,
    pps: 4700000,
    amount: 0,
    totalPps: 0
  },

  item9 = {
    id: 'item9',
    name: 'Feels Amazing Man',
    firstPrice: 70512300000,
    price: 70512300000,
    pps: 29400000,
    amount: 0,
    totalPps: 0
  },

  item10 = {
    id: 'item10',
    name: 'Gachi',
    firstPrice: 1057684514000,
    price: 1057684514000,
    pps: 199000000,
    amount: 0,
    totalPps: 0
  },

  item11 = {
    id: 'item11',
    name: 'Grey Face',
    firstPrice: 17980636738000,
    price: 17980636738000,
    pps: 981400000,
    amount: 0,
    totalPps: 0
  },
]

var upgrades = [

  upgrade0 = {
    upgradedItem: item0,
    effectivness: 50,
    price: 250,
    bought: false,
  },
  upgrade1 = {
    upgradedItem: item0,
    effectivness: 100,
    price: 2300,
    bought: false,
  },

  upgrade2 = {
    upgradedItem: item1,
    effectivness: 50,
    price: 2500,
    bought: false,
  },

  upgrade3 = {
    upgradedItem: item1,
    effectivness: 100,
    price: 60000,
    bought: false,
  },

  upgrade4 = {
    upgradedItem: item2,
    effectivness: 50,
    price: 35000,
    bought: false,
  },

  upgrade5 = {
    upgradedItem: item2,
    effectivness: 100,
    price: 1180000,
    bought: false,
  },

  upgrade6 = {
    upgradedItem: item3,
    effectivness: 50,
    price: 368000,
    bought: false,
  },

  upgrade7 = {
    upgradedItem: item3,
    effectivness: 100,
    price: 21000000,
    bought: false,
  },

  upgrade8 = {
    upgradedItem: item4,
    effectivness: 50,
    price: 1740000,
    bought: false,
  },

  upgrade9 = {
    upgradedItem: item4,
    effectivness: 100,
    price: 199500000,
    bought: false,
  },

  upgrade10 = {
    upgradedItem: item5,
    effectivness: 50,
    price: 23000000,
    bought: false,
  },

  upgrade11 = {
    upgradedItem: item5,
    effectivness: 100,
    price: 2100000000,
    bought: false,
  },

  upgrade12 = {
    upgradedItem: item6,
    effectivness: 50,
    price: 240000000,
    bought: false,
  },

  upgrade13 = {
    upgradedItem: item6,
    effectivness: 100,
    price: 3462500000,
    bought: false,
  },

  upgrade14 = {
    upgradedItem: item7,
    effectivness: 50,
    price: 4200000000,
    bought: false,
  },

  upgrade15 = {
    upgradedItem: item7,
    effectivness: 100,
    price: 280300000000,
    bought: false,
  },

  upgrade16 = {
    upgradedItem: item8,
    effectivness: 50,
    price: 40000000000,
    bought: false,
  },

  upgrade17 = {
    upgradedItem: item8,
    effectivness: 100,
    price: 6312000000000,
    bought: false,
  },

  upgrade18 = {
    upgradedItem: item9,
    effectivness: 50,
    price: 720000000000,
    bought: false,
  },

  upgrade19 = {
    upgradedItem: item9,
    effectivness: 100,
    price: 147312000000000,
    bought: false,
  },

  upgrade20 = {
    upgradedItem: item10,
    effectivness: 50,
    price: 10798000000000,
    bought: false,
  },

  upgrade21 = {
    upgradedItem: item10,
    effectivness: 100,
    price: 1500000000000000,
    bought: false,
  },

  upgrade22 = {
    upgradedItem: item11,
    effectivness: 50,
    price: 199233000000000,
    bought: false,
  },

  upgrade23 = {
    upgradedItem: item11,
    effectivness: 100,
    price: 26100000000000000,
    bought: false,
  },


];

var itemDOM = document.getElementsByClassName('shop-item'); // array of every item UI element
var upgradesDOM = document.getElementsByClassName('upgrade-image'); // array of every upgrade UI element