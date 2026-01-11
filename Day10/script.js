// console.log("Hello");       
// console.log(document.title);
// console.log(document.URL);
// console.log(document.body); 
// console.log(document.images);

// console.log(document.getElementById("btn"));
// console.log(document.getElementById("para"));

// Get element by ID //
// console.log(document.getElementById(heading));
// var headerTitle = document.getElementById("heading");
// console.log(heading);
// heading.textContent = "Heloo world";
// console.log(document.getElementById("btn"));
// console.log(document.getElementById("para"));
// console.log(document.getElementById(heading));

// var span = document.getElementById('span');
// console.log(span);

// span.textContent = "This is the new span";

// span.innerText = "This is the newer span";

// console.log(span.innerText);
// console.log(span.textContent);

// // span.innerHTML = "<h2>This h2 is created by using dom</h2>";

// var Para = document.getElementById('para');
// var btn = document.getElementById('btn');


// // changing styles by DOM

// Para.style.border = '2px solid blue';
// btn.style.padding = '20px';
// span.style.backgroundColor = 'pink';


//get elements by class name
// var head = document.getElementsByClassName('headings');
// console.log(head);
// console.log(head[0]);
// console.log(head[1]);
// head[1].style.backgroundColor = 'pink';
// head[1].textContent = 'this is second Hello';

// // gives error
// //  head.style.border = '2px solid yellow';

// for(let i = 0; i < head.length; i++){
//     head[i].style.border = '2px solid purple';

// }

// get elements bt tag name //

// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// // items[1].style.backgroundColor = 'pink';
// // items[1].textContent = 'this is second Hello';

// // gives error
// //  head.style.border = '2px solid yellow';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#e1e1e1';
// }

// // Query Selector //
// var Hone = document.querySelector('h1');
// Hone.style.border = '5px solid black';

// var span =  document.querySelector('#span');
// span.style.backgroundColor = 'yellow';
// span.style.padding = '5px';

// var item = document.querySelector('.list-items');
// item.style.color = "blue";

// var item = document.querySelector('.list-items');
// var lastitem = document.querySelector('.list-items:last-child');
// lastitem.style.color = 'red';

// var seconditem = document.querySelector('.list-items:nth-child(1)');
// seconditem.style.color= 'pink';


// Query Selector all //
// var lists = document.querySelectorAll(.headings);

// Change text and color dynamically

// changw the text
let changetext = document.getElementById('changetext');
changetext.innerText = "the text is changed";

//change the color
let changeColor = document.querySelector('#changecolor');
changeColor.style.color = "blue";