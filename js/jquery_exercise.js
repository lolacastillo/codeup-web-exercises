"use strict";


// Jquery exercise 1

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
//
// var contents = $('h1').html();
// alert(contents);
//
// $('.codeup').css('border', '1px solid red ');
//
// $('li').css('font-size', '20px');
//
// $('p, h1,li').css('background-color', 'yellow');

// ========================================================

// Jquery exerise 2: Mouse Events


$('h1').click(function() {
    $(this).css('background-color','blue');
});

$('p').dblclick(function(e) {
    $(this).css('font-size','18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);



