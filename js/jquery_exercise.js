"use strict";

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

var contents = $('h1').html();
alert(contents);

$('.codeup').css('border', '1px solid red ');

$('li').css('font-size', '20px');

$('p, h1,li').css('background-color', 'yellow');

