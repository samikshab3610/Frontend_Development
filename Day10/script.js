let heading = document.getElementById("heading");

console.log(heading.innerText);
heading.innerText = "DOM is powerful" ;

let spanelement = document.getElementById("span");

console.log(spanelement.innerHTML);
spanelement.innerHTML = "<span>This is new span</span>";

let styleChange = document.querySelector("span");

console.log(styleChange.style.fontWeight);
styleChange.style.fontWeight = "bolder";

let para = document.getElementById("para");

console.log(para.innerText);
para.innerText = "This is para changed dynamically";

//building
let btn = document.querySelector("button");

console.log(getComputedStyle(btn).color);
btn.style.color = "black";
