var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  botRegex = /^\/cool/;
  botRegexSalt = /^\/salt/;
  botRegexBird = /^\/birdsupport/;
  botRegexDuty = /^\/duty/;
  botRegexDuty2 = /^\/tomorrow/;
  botRegexWeek = /^\/thisweek/;
  botRegexHelp = /^\/help/;
  botRegexUp = /^\/update/;
  botRegexSor = /^\/sorry/;
  botRegexDuty3 = /^\/today/;
  botRegexLuke = /^\/luke/;
  botRegexAshton = /^\/ashton/;
  botRegexAustin = /^\/austin/;
  botRegexAlly = /^\/braden/;
  botRegexCecilia = /^\/cecilia/;
  botRegexChristian = /^\/christian/;
  botRegexDavid = /^\/david/;
  botRegexEmma = /^\/Emma/;
  botRegexTaylor = /^\/frida/;
  botRegexJen = /^\/jen/;
  botRegexJordan = /^\/jordan/;
  botRegexMakenzie = /^\/makenzie/;
  botRegexMichael = /^\/michael/;
  botRegexPaige = /^\/paige/;
  botRegexRachel = /^\/rachel/;
  botRegexTaylorL = /^\/taylor/;
  botRegexV = /^\/v/;

  var mon = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
    "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31", "32?"],
    ["", "", "", "empty", "McKenzie and Mike", "Christian and Emma",
      "Ally and ", "Taylor and Cecilia", "Paige and Mike", "Paige and Mike",
      "Luke and Mike", "Rachel and Ally", "Cecilia and ", "Ally and Ashton",
      "Jordan and Paige", "David and ", "David and ", "Luke and Mike",
      "Paige and Makenzie", "Emma and Rachel", "Ally and Luke",
      "David and Ashton", "Emma and Ally", "Mike and Ally", "Rachel and ",
      "Emma and Rachel", "David and Ashton", "Christian and Ally", "", "", "",
      ""],
    ["Taylor and Jordan", "Taylor and Emma", "Taylor and Emma", "Luke and Mike",
      "Makenzie and Paige", "Racel and ", "Ally and Austin", "David and Taylor",
      "Emma and Ashton", "", "", "", "", "", "", "", "", "Luke and Makenzie",
      "Luke and Ashton", "Christian and ", "Paige and Ally",
      "Austin and Cecilia", "Makenzie and Austin", "Makenzie and Austin",
      "Ashton and ", "Jordan and Mike", "Paige and Emma", "Makenzie and ",
      "Cecilia and Ashton", "Ally and Christian", "Ally and Christian", ""],
    ["", "", "", "Ashton and Ally", "David and Cecilia", "David and Rcahel",
      "David and Rachel", "Mike and Rachel", "Emma and Rachel",
      "David and Christian", "Makenzie and Ally", "David and ",
      "Austin and Emma", "Austin and Makenzie", "Emma and Rahcel",
      "Paige and Mike", "Rachel and Emma", "Makenzie and Austin",
      "Christian and Taylor L", "Jordan and Cecilia", "Jordan and Cecilia",
      "Jordan and Christian", "Ashton and Paige", "Jordan and Makenzie",
      "Christain and Paige", "Cecilia and Taylor L", "Makenzie and Paige",
      "Makenzie and Paige", "Ashton and Luke", "Austin and Luke", "", ""],
    ["Mike and David", "Christian and Makenzie", "Cecilia and Taylor L",
      "Cecilia and Rachel", "Cecilia and Rachel", "Ally and Cecilia",
      "Taylor L and Jordan", "Austin and Paige", "Ally and Luke",
      "Cecilia and Taylor L", "Christain and Mike", "Christain and Luke", "",
      "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
      ""],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31", "32?"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31", "32?"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31", "32?"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31", "32?"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31", "32?"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31", "32?"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31", "32?"]];

  if (request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if (request.text && botRegexHelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage(
        "I am here to help! Here is a list of things I can do:\n/duty or /today - Peeps on duty today\n/tomorrow - Peeps on duty tomorrow\n/thisweek - Peeps for entire week\n/cool - Sends a cool emoji face\n/sorry - When you are truly sorry\n/salt - Don't use unless things get salty\n/birdsupport - for when you hit your 'beaking' point\n\n/update - See what's new in this update\nType /yourname and get a list of duty dates.\n\nLet Luke know if something is not working or there is a image or reaction you would like added.");
    this.res.end();
  }
  else if ((request.text && botRegexDuty.test(request.text)) || (request.text
          && botRegexDuty3.test(request.text))) {
    this.res.writeHead(200);
    postMessage(getTodayDutyPeople());
    /*
    var d = convertUTCDateToLocalDate(new Date());
    var month = d.getMonth();
    var day = d.getDate();

    people = mon[month][day - 1];

    if (day % 2 == 0) {
      postMessage("Today " + people + " are on duty");
    } else if (day % 3 == 0) {
      postMessage("Today's lucky winners are " + people);
    } else {
      postMessage(people + " get to go fight the good fight tonight");
    }
    */
    this.res.end();

  }
  else if ((request.text && botRegexWeek.test(request.text))) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
    var month = d.getMonth();
    var day = d.getDate(); //gives back the day of the month + 1
    var week = ["", "", "", "", "", "", ""]; //holds the names of ppl on duty for that week, dynamic
    var days = ["", "", "", "", "", "", ""];
    var people = "incorrect";

    var y = -1;
    for (x = 0; x < 7; x++, y++) {
      if (mon[month][day + y]) {//if there is a string
        week[x] = mon[month][day + y];//store the people on duty for that day
        days[x] = day + y + 1;//store the day of the month
      } else {//if we reached the end of the month, we need to iterate the month, and then
        var z = 0;
        for (; z < 7 - x; z++, y++) {
          week[z] = mon[month + 1][z + 1];
          days[z] = z + 1;
        }
      }
    }

    postMessage("This is how the week looks:\nToday: " + week[0]
        + "\nTomorrow: " + week[1] + ",\n" + days[2] + ": " + week[2] + ",\n"
        + days[3] + ": " + week[3] + ",\n" + days[4] + ": " + week[4] + ",\n"
        + days[5] + ": " + week[5] + ",\n" + days[6] + ": " + week[6]);
    this.res.end();

  }
  else if (request.text && botRegexDuty2.test(request.text)) {
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

  else if (request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  }
  else if (request.text && botRegexBird.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://imgur.com/gallery/CBxba");
    this.res.end();
  }
  else if (request.text && botRegexUp.test(request.text)) {
    this.res.writeHead(200);
    postMessage(
        "New in this update:\nAdded functions:\n\n/thisweek - new and improved\n");
    this.res.end();
  }
  else if (request.text && botRegexSor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/RFDXes97gboYg/200_s.gif");
    this.res.end();
  }
  else if (request.text && botRegexLuke.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Luke's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexAshton.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Ashton's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexAustin.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Austin's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexAlly.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Braden's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexCecilia.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Cecilia's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexChristian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Christian's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexDavid.test(request.text)) {
    this.res.writeHead(200);
    postMessage("David's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexEmma.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Emma's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexJen.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://imgur.com/a/MzaOH");
    this.res.end();
  }
  else if (request.text && botRegexTaylor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Frida's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexJordan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Jordan's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexMakenzie.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Makenzie's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexMichael.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Michaels's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexPaige.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Paige's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexRachel.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Rachel's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexTaylorL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Taylor's Duty Dates:");
    this.res.end();
  }
  else if (request.text && botRegexV.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/sCrUuj6.jpg");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse, options, body, botReq;

  botResponse = response;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id": botID,
    "text": botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function (res) {
    if (res.statusCode == 202) {
      //neat
    } else {
      console.log('rejecting bad status code ' + res.statusCode);
    }
  });

  botReq.on('error', function (err) {
    console.log('error posting message ' + JSON.stringify(err));
  });
  botReq.on('timeout', function (err) {
    console.log('timeout posting message ' + JSON.stringify(err));
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



//======================================================================
var clientId = '277429790580-paibcs058ua1t69q4e32a1v3n1aehles.apps.googleusercontent.com'; //choose web app client Id, redirect URI and Javascript origin set to http://localhost
var apiKey = 'AIzaSyCkNl5cB_Wir-CTdTTJNGxVi9HcP1xpn9U'; //choose public apiKey, any IP allowed (leave blank the allowed IP boxes in Google Dev Console)
var userEmail = "laurelvillage1819@gmail.com"; //your calendar Id
var userTimeZone = "Denver"; //example "Rome" "Los_Angeles" ecc...
var maxRows = 10; //events to shown
var calName = "Duty"; //name of calendar (write what you want, doesn't matter)

var scopes = 'https://www.googleapis.com/auth/calendar';

//--------------------- client CALL
function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  checkAuth();
}

//--------------------- end

//--------------------- check Auth
function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

//--------------------- end

//--------------------- handle result and make CALL
function handleAuthResult(authResult) {
  if (authResult) {
    makeApiCall();
  }
}

//--------------------- end

var onDuty;

//--------------------- API CALL itself
function makeApiCall() {
  var today = new Date(); //today date
  gapi.client.load('calendar', 'v3', function () {
    var request = gapi.client.calendar.events.list({
      'calendarId': userEmail,
      'timeZone': userTimeZone,
      'singleEvents': true,
      'timeMin': today.toISOString(), //gathers only events not happened yet
      'maxResults': maxRows,
      'orderBy': 'startTime'
    });
    request.execute(function (resp) {
      var onDutyToday = [];
      for (var i = 0; i < resp.items.length; i++) {
        var item = resp.items[i];
        var name = item.summary;
        onDutyToday.append(name);
      }
      onDuty = onDutyToday;
    });
  });
}

function getTodayDutyPeople() {
  handleClientLoad()
  makeApiCall()
  return onDuty;
}