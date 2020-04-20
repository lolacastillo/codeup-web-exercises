"use strict";

alert("Welcome to my website!");

console.log("Hello from external JavaScript");

var userFavColor = prompt('What is your favorite color?');
console.log("Great " + userFavColor + " is my favorite color too!");


// Exercise 3
// 1
var mermaid = 3;
var bear = 5;
var hercules = 1;

console.log((mermaid + bear + hercules) * 3);
// 2
var google = 400;
var amazon = 380;
var facebook = 350;

console.log((6 * google) + (4 * amazon) + (10 * facebook));
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
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

function productDiscount(offerIsValid, isPremiumMember, numberOfItems){
    if(offerIsValid && (isPremiumMember || numberOfItems > 2)){
        console.log("you get the offer");
    }else{
        console.log("get out of my store");
    }
}

productDiscount(offerIsValid, isPremiumMember,numberOfItems);
