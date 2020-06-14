const numbers = [1, -1, 2, 3];
let sum = numbers.reduce((total, value) => {
  // internally the reduce method will get the result of (total + value) and store it in the total
  console.log(`total: ${total}, value: ${value}`);
  return total + value;
}, 0);
console.log(sum);

let sum2 = numbers.reduce((total, value) => {
  // if we don't specify the second parameter, the first value of the array will be use as that, and the current value will start from the second position in the array
  console.log(`total: ${total}, value: ${value}`);
  return total + value;
});
console.log(sum2);

// get unique values from an array
const myArray = ['a', 1, 'a', 2, '1'];
let uniqueArray = [...new Set(myArray)];
console.log(uniqueArray);

const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: 39.99,
    img: './images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
];
// get the unique categories from the 'menu' array
let categories = [...new Set(menu.map((item) => item.category))];
console.log(categories);

// creating sets
// it contains
// ["sumit","amit","anil","anish"]
let set1 = new Set(['sumit', 'sumit', 'amit', 'anil', 'anish']);
// it contains 'f', 'o', 'd'
let set2 = new Set('fooooooood');
// it contains [10, 20, 30, 40]
let set3 = new Set([10, 20, 30, 30, 40, 40]);
// it is an  empty set
let set4 = new Set();
