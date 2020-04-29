"use strict";

function showMultiplicationTable(num){
    for(var i = 1; i < 11; i++){
        console.log(num * i);
    }
}


for(var i = 1; i < 11; i++){
   var num = Math.floor((Math.random() * 200) + 20);
    if(num % 2 === 0){
        console.log(num + " is even");
    }else{
        console.log(num + " is odd");
    }
}

for(var i = 1; i <10; i++){
    var str = ""
    for (var j = 1; j <= i; j++){
        str += i
    }
    console.log(str);
}

for(var i = 100; i > 4; i-=5) {
    console.log(i);
}