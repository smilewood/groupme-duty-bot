var HTTPS = require('https');
var cool = require('cool-ascii-faces');


var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool/; botRegexSalt = /^\/salt/; botRegexBird=/^\/birdsupport/; botRegexDuty = /^\/duty/; botRegexDuty2 = /^\/tomorrow/; 
      botRegexWeek = /^\/thisweek/;
      botRegexHelp = /^\/help/; botRegexUp = /^\/update/; botRegexSor = /^\/sorry/; botRegexDuty3 = /^\/today/; 
      botRegexLuke = /^\/luke/; botRegexAshton = /^\/ashton/; botRegexAustin = /^\/austin/; botRegexBraden = /^\/braden/; 
      botRegexCecilia = /^\/cecilia/; botRegexChristian = /^\/christian/; botRegexDavid = /^\/david/; botRegexEmma = /^\/Emma/; 
      botRegexFrida = /^\/frida/; botRegexJen = /^\/jen/; botRegexJordan = /^\/jordan/; botRegexMakenzie = /^\/makenzie/; 
      botRegexMichael = /^\/michael/; botRegexPaige = /^\/paige/; botRegexRachel = /^\/rachel/; botRegexTaylor = /^\/taylor/; botRegexV= /^\/v/; 

  
  var mon = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "Michael and Luke", "Frida and Taylor", "Austin and Jordan", "Luke and David", "Emma and Cecilia", "Luke and David", "Luke and Michael", "Luke and Michael", "Frida and Jordan", "Austin and Makenzie", "Rachel and Taylor", "Emma and Michael", "Braden and Michael", "Rachel and Cecilia", "Rachel and Cecilia", "Rachel and David", "Ashton and Makenzie", "Frida and Jordan", "Emma and Cecilia", "Braden and Paige", ""],
  ["Ashton and Paige", "Ashton and Paige", "Luke and Frida", "Luke and Michael", "Rachel and Jordan", "Emma and Christian", "Austin and David", "Rachel and Michael", "Rachel and Michael", "Taylor and Christian", "Ashton and Makenzie", "Rachel and Paige", "Cecilia and Luke", "Braden and Austin", "Emma and Austin", "Emma and Austin", "Christian and David", "Ashton and Michael", "Christian and Jordan", "Makenzie and Paige", "Braden and Michael", "Braden and Ashton", "Braden and Ashton", "Taylor and Paige", "Ashton and Luke", "Jordan and Rachel", "Cecilia and Christian", "Michael and David", "Frida and Jordan", "Frida and Jordan", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], 
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""] ]; 

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexHelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I am here to help! Here is a list of things I can do:\n/duty or /today - Gives the two people on duty today\n/tomorrow - Gives the two people on duty tomorrow\n/thisweek - Gives the peeps on duty for the next week\n/cool - Sends a cool emoji face\n/update - See what's new in this update\n/sorry - When you are truly sorry\n/salt - Don't use unless things get salty\n/birdsupport - for when you hit your 'beaking' point\n\nType /yourname and get a list of duty dates.\n\nLet Luke know if something is not working or there is a image or reaction you would like added." );
    this.res.end();
  } 
  else if((request.text && botRegexDuty.test(request.text)) || (request.text && botRegexDuty3.test(request.text))) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
    var month = d.getMonth();
    var day = d.getDate();
    
    var people = "incorrect";
    
    people = month;    
    
    if (day % 2 == 0) {
      postMessage("Today " + people + " are on duty");
    } else if (day % 3 == 0) {
        postMessage("Today's lucky winners are " + people);
    } else {
        postMessage(people + " get to go fight the good fight tonight");
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
    if (month == 0) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[0][day+y];
        days[x] = day+y+1;
      }
    }
    else if (month == 1) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[1][day+y];
        days[x] = day+y+1;
      }
    }
    else if (month == 2) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[2][day+y];
        days[x] = day+y+1;
      }
    }
    else if (month == 3) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[3][day+y];
        days[x] = day+y+1;
      }
    }
    else if (month == 4) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[4][day+y];
        days[x] = day+y+1;
      }
    }
    else if (month == 7) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
          week[x] = mon[5][day+y];
          days[x] = day+y+1;
      }
    }
     else if (month == 8) {
     var y = -1;
     for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[6][day+y];
        days[x] = day+y+1;
      }
    }
     else if (month == 9) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[7][day+y];
        days[x] = day+y+1;
      }
    }
     else if (month == 10) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[8][day+y];
        days[x] = day+y+1;
      }
    }
     else if (month == 11) {
      var y = -1;
      for (var x = 0; x < 7; x++, y++) {
        week[x] = mon[9][day+y];
        days[x] = day+y+1;
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
    for (x = 0; x < 10; x++) {
      for (y = 0; y < 32; y++) {
        if (y==day && x==month) {
          people = mon[x][y];
          break;
        }
      }
    }
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
    postMessage("New in this update:\nAdded functions:\n\n/birdsupport\n/v\n/thisweek\n");
    this.res.end();
  } 
  else if(request.text && botRegexSor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/RFDXes97gboYg/200_s.gif");
    this.res.end();
  }
  else if(request.text && botRegexLuke.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Luke's Duty Dates:\nAug: 12th, 15th, 17th, 18th, & 19th \nSept: 3rd, 4th, 13th, & 25th \nOct: 2nd, 8th, 9th, 20th, & 22nd \nNov: 9th, & 25th\nDec: None\nGame Days: None");
    this.res.end();
  } 
  else if(request.text && botRegexAshton.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Ashton's Duty Dates:\nAug: None \nSept: 1st, 2nd, 11th, 18th, 22nd, 23rd, & 25th\nOct: 2nd, 5th, & 23rd \nNov: 2nd, & 14th\nDec: 4th\nGame Days: Aug 26th");
    this.res.end();
  } 
  else if(request.text && botRegexAustin.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Austin's Duty Dates:\nAug: 14th, & 21st \nSept: 7th, 14th, 15th, & 16th\nOct: 9th, 13th, 14th, 17th, & 24th \nNov: 11th, 15th, & 27th\nDec: None\nGame Days: None");
    this.res.end();
  } 
  else if(request.text && botRegexBraden.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Braden's Duty Dates:\nAug: 24th, & 31st \nSept: 5th, 15th & 16th, 27th \nOct: 3rd, 18th \nNov: 1st, 7th\nDec: 5th \nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexCecilia.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Cecilia's Duty Dates:\nAug: 16th, 25th, 26th, & 30th\nSept: 1st & 2nd, 19th, 28th \nOct: 10th, 11th, 27th & 28th \nNov: 16th, 27th\nDec: 4th, 8th & 9th\nGame Days: Nov 11th");
    this.res.end();
  } 
  else if(request.text && botRegexChristian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Christian's Duty Dates:\nAug: None \nSept: 4th (Day Duty), 7th, 14th, 29th & 30th \nOct: 4th, 12th, 25th \nNov: 1st, 8th\nDec: none\nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexDavid.test(request.text)) {
    this.res.writeHead(200);
    postMessage("David's Duty Dates:\nAug: 15th, 17th, & 27th \nSept: 6th, 15th & 16th, 18th, 27th \nOct: 4th, 11th, 31st \nNov: 10th and 11th, 15th, 29th\nDec: none\nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexEmma.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Emma's Duty Dates:\nAug: 16th, 23rd, & 30th \nSept: 3rd, 12th \nOct: 8th, 13th & 14th, 15th \nNov: 5th, 10th & 11th, 26th\nDec: none\nGame Days: Nov 18th");
    this.res.end();
  } 
  else if(request.text && botRegexJen.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://imgur.com/a/MzaOH");
    this.res.end();
  } 
  else if(request.text && botRegexFrida.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Frida's Duty Dates:\nAug: 13th, 20th, & 29th \nSept: 10th, 24th \nOct: 6th & 7th, 9th, 23rd \nNov: 6th, 28th\nDec: none\nGame Days: Oct 28th");
    this.res.end();
  } 
  else if(request.text && botRegexJordan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Jordan's Duty Dates:\nAug: 14th \nSept: 12th, 17th, 29th & 30th \nOct: 1st, 24th \nNov: 9th, 26th\nDec: 1st & 2nd, 6th \nGame Days: Sept 9th");
    this.res.end();
  } 
  else if(request.text && botRegexMakenzie.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Makenzie's Duty Dates:\nAug: 21st, & 28th \nSept: 4th, 20th, 22nd & 23rd, 26th \nOct: 18th, 22nd, 27th & 28th \nNov: 14th, 29th\nDec: 7th\nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexMichael.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Michaels's Duty Dates:\nAug: 12th, 18th, 19th, 21st, 23rd, & 24th \nSept: 17th, 18th \nOct: 9th, 26th \nNov: 3rd & 4th, 14th, 28th\nDec: 5th\nGame Days: Aug 26th");
    this.res.end();
  } 
  else if(request.text && botRegexPaige.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Paige's Duty Dates:\nAug: 31st \nSept: 1st & 2nd, 7th, 24th \nOct: 8th, 19th \nNov: 5th, 12th\nDec: none\nGame Days: Nov 18th");
    this.res.end();
  } 
  else if(request.text && botRegexRachel.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Rachel's Duty Dates:\nAug: 22nd, 25th, 26th, & 27th \nSept: 5th, 8th & 9th, 21st, 28th \nOct: 5th, 17th, 20th & 21st \nNov: 7th, 13th\nDec: 3rd \nGame Days: August 26th");
    this.res.end();
  } 
  else if(request.text && botRegexTaylor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Taylor's Duty Dates:\nAug: 16th, 20th \nSept: 6th, 8th & 9th \nOct: 5th, 20th & 21st, 26th, 29th \nNov: 16th, 30th\nDec: 3rd\nGame Days: none");
    this.res.end();
  }
  else if(request.text && botRegexV.test(request.text)) {
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
