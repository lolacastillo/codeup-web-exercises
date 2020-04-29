"use strict"

var i = 1;

while(i < 65536 ){
    console.log(i * 2);
    i += i;
}

function printStatus(num,allCones) {
    if (allCones < num && allCones > 0) {
        console.log("Cannot sale you " + num + " I only have " + allCones);
    } else if (allCones === 0) {
        console.log("Yay I sold them all");
    }else{
        console.log(num + " cones sold");
    }
}

var allCones = Math.floor(Math.random() * 50) + 50;
do {
    let conesBought = Math.floor(Math.random()* 5) + 1;
    printStatus(conesBought,allCones);
    if(allCones < conesBought && allCones > 0){
        allCones=-allCones
    }else if(allCones === 0){
        allCones =- 1
    }else{
    allCones = allCones - conesBought;
    }
} while (allCones > -1);