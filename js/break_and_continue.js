"use strict";
do {
    var num = prompt("Choose an odd number between 1 and 50");
}while(num % 2 === 0 )
console.log("Number to skip: " + num);

    for (var i = 1; i < 50; i += 2) {
        if (i == num) {
            console.log("Yikes! Skipping number: " + num);
            continue;
        }
        console.log("Here is an odd number: " + i)

    }
