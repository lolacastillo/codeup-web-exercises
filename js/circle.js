(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
           var area = Math.PI * Math.pow(3,2);
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true){
               console.log("Area of a circle with radius: " + this.radius + ", is: "+ Math.round(circle.getArea()))
            }else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            // console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    var circle2 = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            var area = Math.PI * Math.pow(5,2);
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true){
                console.log("Area of a circle with radius: " + this.radius + ", is: "+ Math.round(circle2.getArea()))
            }else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle2.getArea());
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            // console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle2.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle2.logInfo(true);
})();
