"use strict";

alert("Welcome to my website!");

console.log("Hello from external JavaScript");

var userFavColor = prompt('What is your favorite color?');
console.log("Great " + userFavColor + " is my favorite color too!");


// Exercise 3
// 1
var mermaid = prompt('How many days did you rent Little Mermaids');
var bear = prompt('How many days did you rent Little Mermaids');
var hercules = prompt('How many days did you rent Little Mermaids');
var rentalCost = prompt('How many days did you rent Little Mermaids')

console.log((mermaid + bear + hercules) * rentalCost);
// 2
var google = prompt('What is googles pay rate?');
var amazon = prompt('what is amazons pay rate?');
var facebook = prompt('What is facebooks pay rate?');
var googleHR =prompt('How many hours did you work for google?');
var amazonHR =prompt('How many hours did you work for amazon?');
var facebookHR =prompt('How many hours did you work for facebook?');


console.log((googleHR * google) + (amazonHR * amazon) + (facebookHR * facebook));
// 3
var numClass = prompt('How many people are in the class?');
var schedule = confirm('Does your schedule meet the class schedule?');

function enterClass(numClass, schedule){
    if(numClass <= 27 && schedule == true){
        console.log("you're in!");
    }else{
        console.log("class is full, sorry");
    }
}

enterClass(numClass, schedule);
// 4
var numberOfItems = prompt('How many items in your bag?'); // number
var offerIsValid = true; // boolean
var isPremiumMember = false; // boolean

function productDiscount(offerIsValid, isPremiumMember, numberOfItems){
    if(offerIsValid && (isPremiumMember || numberOfItems > 2)){
        console.log("you get the offer");
    }else{
        console.log("get out of my store");
    }
}

productDiscount(offerIsValid, isPremiumMember,numberOfItems);
