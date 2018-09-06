var HTTPS = require('https');
var cool = require('cool-ascii-faces');


var botID = process.env.BOT_ID;

function respond() {
    var request = JSON.parse(this.req.chunks[0]),
        botRegex = /^\/cool/; botRegexSalt = /^\/salt/; botRegexBird=/^\/birdsupport/; botRegexDuty = /^\/duty/; botRegexDuty2 = /^\/tomorrow/;
    botRegexWeek = /^\/thisweek/;
    botRegexHelp = /^\/help/; botRegexUp = /^\/update/; botRegexSor = /^\/sorry/; botRegexDuty3 = /^\/today/;
    


    var mon = [["jan"],["feb"],["mar"],["apr"],["may"],["june"],["july"],["aug"],
               ["1", "2","Dominic and Taylor", "Miles and Rachel O", "Monica and Paige", "Lyn and Morgan", 
                "Miles and Monica", "Miles and Monica", "Lawrence", "Dominic and Jordan", "Jessica and Miles", 
                "Monica and Tad", "Hannah and Morgan", "Paige and Rachel M", "Paige and Rachel M", "Lawrence and Rachel M", 
                "Jordan and Taylor", "Jessica and Rachel O", "Paige and Tad", "Hannah and Lyn", "Dominic and Hannah",
                "Dominic and Hannah", "Rachel M", "Dominic and Taylor", "Miles and Rachel O", "Monica and Paige", 
                "Lyn and Morgan", "Jessica and Rachel O", "Jessica and Rachel O", "Lawrence"]];

    if(request.text && botRegex.test(request.text)) {
        this.res.writeHead(200);
        postMessage(cool());
        this.res.end();
    }
    else if(request.text && botRegexHelp.test(request.text)) {
        this.res.writeHead(200);
        postMessage("I am here to help! Here is a list of things I can do:\n/duty or /today - Peeps on duty today"+
                    "\n/tomorrow - Peeps on duty tomorrow\n/thisweek - Peeps for entire week\n/cool - Sends a cool emoji face\n"+
                    "/sorry - When you are truly sorry\n/salt - Don't use unless things get salty\n/"+
                    "birdsupport - for when you hit your 'beaking' point\n\n"+
                    "/update - See what's new in this update.\n\nLet Miles or Paige know if something is not working or there is"+
                    "a image or reaction you would like added." );
        this.res.end();
    }
    else if((request.text && botRegexDuty.test(request.text)) || (request.text && botRegexDuty3.test(request.text))) {
        this.res.writeHead(200);
        var d = convertUTCDateToLocalDate(new Date());
        var month = d.getMonth();
        var day = d.getDate();

        people = mon[month][day-1];

        if (day % 2 == 0) {
            postMessage("Today " + people + " are on duty!");
        } else if (day % 3 == 0) {
            postMessage("Today's duty team is " + people + "!");
        } else {
            postMessage(people + " are the duty team for tonight!");
        }
        this.res.end();

    }
    else if((request.text && botRegexWeek.test(request.text))) {
        this.res.writeHead(200);
        var d = convertUTCDateToLocalDate(new Date());
        var month = d.getMonth();
        var day = d.getDate(); //gives back the day of the month + 1
        var week = ["","","","","","",""]; //holds the names of ppl on duty for that week, dynamic
        var days = ["","","","","","",""];
        var people = "incorrect";

        var y = -1;
        for (x = 0; x < 7; x++, y++) {
            if (mon[month][day+y]) {//if there is a string
                week[x] = mon[month][day+y];//store the people on duty for that day
                days[x] = day+y+1;//store the day of the month
            }else {//if we reached the end of the month, we need to iterate the month, and then
                var z = 0;
                for (; z < 7 - x; z++, y++){
                    week[z] = mon[month+1][z + 1];
                    days[z] = z + 1;
                }
            }
        }

        postMessage("This is how the week looks:\nToday: " + week[0] + "\nTomorrow: " + week[1] + ",\n" + days[2] + ": " + week[2] + ",\n" + days[3] + ": " + week[3] + ",\n" + days[4] + ": " + week[4] + ",\n" + days[5] + ": " + week[5] + ",\n" + days[6] + ": " + week[6]);
        this.res.end();

    }
    else if(request.text && botRegexDuty2.test(request.text)) {
        this.res.writeHead(200);
        var d = convertUTCDateToLocalDate(new Date());
        var month = d.getMonth();
        var day = d.getDate();
        var people = "incorrect";

        people = mon[month][day];

        if (day % 2 == 0) {
            postMessage("Tomorrow " + people + " are on duty");
        } else if (day % 3 == 0) {
            postMessage("Tomorrow's Hunger Games tributes are " + people);
        } else {
            postMessage(people + " are out to save the world tomorrow ");
        }
        this.res.end();

    }

    else if(request.text && botRegexSalt.test(request.text)) {
        this.res.writeHead(200);
        postMessage("https://i.imgur.com/B5BSVqH.png");
        this.res.end();
    }
    else if(request.text && botRegexBird.test(request.text)) {
        this.res.writeHead(200);
        postMessage("https://imgur.com/gallery/CBxba");
        this.res.end();
    }
    else if(request.text && botRegexUp.test(request.text)) {
        this.res.writeHead(200);
        postMessage("New in this update:\nUpdated to Fall 2018 staff duty schedule for September.");
        this.res.end();
    }
    else if(request.text && botRegexSor.test(request.text)) {
        this.res.writeHead(200);
        postMessage("https://media0.giphy.com/media/RFDXes97gboYg/200_s.gif");
        this.res.end();
    }
    else {
        console.log("don't care");
        this.res.writeHead(200);
        this.res.end();
    }
}

function postMessage(response) {
    var botResponse,options, body, botReq;

    botResponse = response;

    options = {
        hostname: 'api.groupme.com',
        path: '/v3/bots/post',
        method: 'POST'
    };

    body = {
        "bot_id" : botID,
        "text" : botResponse
    };

    console.log('sending ' + botResponse + ' to ' + botID);

    botReq = HTTPS.request(options, function(res) {
        if(res.statusCode == 202) {
            //neat
        } else {
            console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function(err) {
        console.log('error posting message '  + JSON.stringify(err));
    });
    botReq.on('timeout', function(err) {
        console.log('timeout posting message '  + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function convertUTCDateToLocalDate(date) {
    var newDate = new Date();

    var offset = 7;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}
exports.respond = respond;
