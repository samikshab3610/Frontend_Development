// Day 9
// Learn: functions , objects, arrays


// console.log("Hello");
// Level 1 – Warm-up
//1 Write an arrow function that returns "Hello World".

const greet = () => console.log("Hello World!");
greet();

//Arrow function that takes a name and returns "Hi <name>".

const greetwithname = (name="Samiksha") => console.log("Hii"+name);
greetwithname();

//Arrow function that returns the square of a number.
const square = c => c*c;
console.log(square(3));

//Array Practice Questions (Day-9 level)
//Level 1 – Basics

//1. Create an array of 5 numbers.
let students = ["Samiksha","Sonali","Sakshi","Shreya","Shruti"];

//2. Print the first and last element.
console.log(students[0]+", "+students[4]);

//3. Change the 3rd element to a new value.
students[3]="Ashwini";

//4. Find the length of the array.
console.log(students.length);

//Level 2 – Methods

//1. Add an element to the end of an array.
students.push("Siddhi");
console.log(students);

//2. Remove the last element.
students.pop();
console.log(students);

//3. Add an element to the beginning.
students.unshift("Tanushree");
console.log(students);

//4. Remove the first element.
students.shift();
console.log(students);

//Level 3 – Loops

//1. Print all elements using a for loop.
for(let i=0; i <= students.length; i++){
    console.log(students);
}

//2. Print all elements using forEach.
students.forEach(students => console.log(students));

//Print only even numbers from an array.
for (i=0; i <= students.length; i++){
    if(i/2){
        console.log(students);
    }
    i++;
}

for (i=0; i <= students.length; i+2){
        console.log(students);
        i++;
}

//Level 4 – Logic (Important)

//Find the sum of all numbers in an array.
// let number = [1,2,3,4,5];
// let sum=0;
// for(let j = 0; j < number.length; j++){
//     sum += number[j];
// }
// console.log("Sum of all numbers in array is "+sum);

//Find the largest number in an array.
// let number = [1,2,3,4,5];
// large = number[0];
// for (let i = 1; i < number.length; i++){
//       if (number[i] > large){
//         large = number[i] 
//       }
// }
// console.log(large);

//Count how many elements are greater than 10.
// let num = [10,20,30,40];
// count=0;
// for(let i = 0; i < num.length; i++){
//     if(num[i] >= 10){
//         count++;
//     }
// }
// console.log(count);

//Reverse an array without using .reverse().
// let num = [1,2,3,4,5];
// let reversed = [];

// for(let i = 0; i < num.length; i++){
//     reversed.push(num.length-i);
// }
// console.log(reversed);

//Create an object movie with:
// title
// rating
// year
// Print the title and rating.

// let movie ={
//     title : "Sita Ramam",
//     rating : 10,
//     year : 2022
// };
// console.log(movie.title, movie.rating);

//Favorite movies list (array of objects + loop)
let movie = [
    {Title : "Sita Ramam" , Type : "Romantic"},
    {Title : "Sham Singha Roy" , Type: "Romantic"},
    {Title : "Mission Mangal" , Type: "True Story(Science)"},
    {Title : "Sanam Teri Kasam" , Type: "Romantic"},
    {Title : "Miss India" , Type: "Motivational"},
    {Title : "Frozan" , Type: "Disney Cartoon"}
];

for(let i = 0; i < movie.length; i++){
    console.log("Titles are "+movie[i].Title);
}