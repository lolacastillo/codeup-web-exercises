function myFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Sheet1');
    var dateRange = sheet.getRange("D:D").getValues();
    var emailArr = deliveryStaff();


    if(getWeekDayName() === "Thursday"){
        var today = new Date();
        var formattedDate = Utilities.formatDate(today, "GMT", "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");


        for(var i =0; i< dateRange.length; i++){

            var formattedDate2 = JSON.stringify(dateRange[i][0], null, 4)
            var fdate1 = formattedDate.split("T")
            var fdate2 = formattedDate2.split("T")

            if(fdate2[0].slice(1) === fdate1[0]){
                console.log("Matched " + fdate2[0].slice(1))
                var name = sheet.getRange('F' + (i+1)).getValue();
                console.log(emailArr.length)

                var index = emailArr.map(function(e) { return e.name; }).indexOf(name)

                console.log(emailArr[index].email);



            }
        }


    }

}

function emailSend(recipient){
    GmailApp.sendEmail('lola.castillo@codeup.edu','you sent an email!', 'this is the body')
}

function deliveryStaff(){
    var staff = [
        {name: "Andrew",email:"andrew.king@codeup.edu"},
        {name:"Justin", email:"justin.reich@codeup.com"},
        {name:"David", email:"david.stephens@codeup.edu"},
        {name:"Kenneth", email:"kenneth.howell@codeup.edu"},
        {name:"Madeleine", email:"madeleine.capper@codeup.edu"},
        {name:"Javier", email:"javier.ruedas@codeup.edu"},
        {name:"Jay", email:"jay.arredondo@codeup.edu"},
        {name:"John S", email:"john.salas@codeup.edu"},
        {name:"Kris", email:"kris.connolly@codeup.edu"},
        {name:"Cody", email:"cody.hastings@codeup.edu"},
        {name:"Ryan", email:"ryan.stephens@codeup.edu"},
        {name:"Jeanice", email:"jeanice.freeman@codeup.edu"},
        {name:"Mark", email:"mark.robinson@codeup.edu"},
        {name:"Lola", email:"lola.castillo@codeup.edu"},
        {name:"John G", email:"john.grinstead@codeup.edu"},
        {name:"Adam", email:"adam.krull@codeup.edu"},
        {name:"Ryan M", email:"ryan.mccall@codeup.edu"},
        {name:"Misty", email:"misty.garcia@codeup.edu"},
        {name:"Trevor", email:"trevor.mullis@codeup.edu"},
        {name:"Nikki", email:"nikki.meyer@codeup.edu"},
        {name:"Jason", email:"jason.merrell@codeup.edu"},
        {name:"Gonzalo", email:"gonzalo.ovalle@codeup.edu"},
        {name:"Sabrina", email:"sabrina.burch@codeup.edu"},
        {name:"Tasha", email:"tasha.rivers@codeup.edu"},
        {name:"Isaac", email:"isaac.yanez@codeup.edu"},
        {name:"Brooke", email:"brooke.leonard@codeup.edu"},
        {name:"Gilly", email:"nick.gilmore@codeup.edu"},
        {name:"Farrukh", email:"farrukh.sultonov@codeup.edu"},
        {name:"Jeremy", email:"jeremy.sellers@codeup.edu"},
        {name:"Johnny", email:"johnny.martiniez@codeup.edu"},
        {name:"Amanda", email:"amanda.gomez@codeup.edu"},
        {name:"Barbara", email:"barbara.mote@codeup.edu"},
        {name:"Steve", email:"stephen.plug@codeup.edu"},
        {name:"Brooke", email:"brooke.holyoak@codeup.edu"},
        {name:"Joshua", email:"joshua.rooks@codeup.edu"},
        {name:"Raul", email:"raul.torres@codeup.edu"},
        {name:"Billie", email:"billie.dorries@codeup.edu"},
        {name:"Josh", email:"josh.wren@codeup.edu"},
        {name:"Lauren", email:"lauren.wilson@codeup.edu"},]

    return staff;e
}





function getWeekDayName() {

    // get current date
    var exampleDate = new Date();

    // get the weekday number from the current date
    var dayOfWeek = exampleDate.getDay();

    // use a 'switch' statement to calculate the weekday name from the weekday number
    switch (dayOfWeek) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    // log the output to show the weekday name
    return day;
}
