function studySessionFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Sheet1');
    var dateRange = sheet.getRange("D:D").getValues();
    var emailArr = deliveryStaff();


    if(getWeekDayName() === "Wednesday"){
        var today = new Date();
        var currentDay = today.getDate();
        var twoDaysAway = new Date(today.getFullYear(), today.getMonth(), currentDay + 1);
        var formattedDate = Utilities.formatDate(twoDaysAway, "GMT", "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        console.log(today);
        console.log(formattedDate);


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
                return emailArr[index].email


            }
        }


    }

}

function emailFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Sheet1');
    var dateRange = sheet.getRange("D:D").getValues();
    var emailArr = deliveryStaff();


    if(getWeekDayName() === "Wednesday"){
        var today = new Date();
        var currentDay = today.getDate();
        var twoDaysAway = new Date(today.getFullYear(), today.getMonth(), currentDay + 1);
        var formattedDate = Utilities.formatDate(twoDaysAway, "GMT", "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        console.log(today);
        console.log(formattedDate);


        for(var i =0; i< dateRange.length; i++){

            var formattedDate2 = JSON.stringify(dateRange[i][0], null, 4)
            var fdate1 = formattedDate.split("T")
            var fdate2 = formattedDate2.split("T")

            if(fdate2[0].slice(1) === fdate1[0]){
                console.log("Matched " + fdate2[0].slice(1))
                var name = sheet.getRange('G' + (i+1)).getValue();
                console.log(emailArr.length)

                var index = emailArr.map(function(e) { return e.name; }).indexOf(name)

                console.log(emailArr[index].email);
                return emailArr[index].email


            }
        }


    }

}

function emailWeeklySend(recipient){
    let subject = "Email Prework Support"
    let body = "Hi there,<br> You are assigned to provide email support for WebDev Pre-work this week.<br> Please monitor your Gmail Inbox<br> throughout the week for email addressed to: webdev-prework@codeup.edu<br> When you respond to the prospective student, be sure to click the “Reply to all” button. If you forget and just Reply to the prospective student, then please Forward your response to webdev-prework@codeup.edu.<br> IMPORTANT 1: Please respond to the prospective student within 24 hours, even if the response is just a request for clarification. If you need ANY help with any part of this support, please post an @Chanel Rodriguez message in the web-development Slack channel.<br> IMPORTANT 2: There are only certain questions that you can answer via email. You can answer any questions that come in for our Teachable pre-work, however, our 45 JS exercises on Glitch can only have questions about the platform (Glitch) answered over email (ex. “What are these errors in my console,” “How do I see my results?“). For any questions about the material (ex. “How do I make a loop?” “How do I create a function?“), you should direct them to the one hour live support session on Thursdays from 4 to 5 via Zoom. The link to the Zoom session is: "+ "<a href='https://us02web.zoom.us/j/87931131822?pwd=SEh3Smo1WkZTQTNKRkxaRDZUOURIQT09'>Zoom Link to Study Session</a>"

    GmailApp.sendEmail(recipient,subject,"", { htmlBody: body })
};

function studySessionSend(recipient){
    let subject= "Web Dev Weekly PreWork Study Session";
    let body= "Hi there,<br> You are assigned to provide Zoom support for WebDev Pre-work this week.<br> The Zoom session is this Thursday from 4p to 5p. If you are assigned in a cohort at that time, please ask to the other cohort instructors to provide coverage during that time. If coverage cannot be provided by your fellow cohort instructors, please email me and/or justin.reich@codeup.edu and we will figure it out.<br> The zoom link is:<br>" + "<a href='https://us02web.zoom.us/j/87931131822?pwd=SEh3Smo1WkZTQTNKRkxaRDZUOURIQT09'>Zoom Link to Study Session</a><br>" + "<br> Thanks!<br> Codeup Notification System └[∵┌]";

    GmailApp.sendEmail(recipient,subject,"", { htmlBody: body })
};


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
        {name:"Trevor", email:"trevor.mullis@codeup.edu"},{name:"Nikki", email:"nikki.meyer@codeup.edu"},
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

function run(){
    studySessionSend(studySessionFunction());
    emailWeeklySend(emailFunction());
}

studySessionSend(studySessionFunction());
emailWeeklySend(emailFunction());