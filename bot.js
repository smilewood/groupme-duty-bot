var HTTPS = require('https');
var cool = require('cool-ascii-faces');


var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool/; botRegexSalt = /^\/salt/; botRegexDuty = /^\/duty/; botRegexDuty2 = /^\/tomorrow/; botRegexDuty3 = /^\/today/; 
      botRegexHelp = /^\/help/; botRegexUp = /^\/update/; botRegexSor = /^\/sorry/; 

  //Arrays of duty partners
  var jan = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var feb = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var mar = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var apr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var may = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var aug = ["", "", "", "", "", "", "", "", "", "", "", "Garrett and Monica", "Heidi and Brennan", "Everton and jacob", "Garrett and Monica", "Armani and Marilynn", "Acacia and Emily", "Julianne and Victoria", "Julianne and Victoria", "Marilynn and Victoria", "Tanner and Jared", "Tavious and Olivia", "Armani and Haneen", "Tavious and Keely", "Emily and Tanner", "Emily and Tanner", "Heidi and Haneen", "Victoria and Jared", "Acacia and Julianne", "Anna and Brennan", "Julianne and Anna", ""]; 
  var sep = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var oct = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var nov = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var dec = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexHelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I am here to help! Here is a list of things I can do:\n/duty - Gives the two people on duty today\n/tomorrow - Gives the two people on duty tomorrow\n/salt - Don't use unless things get salty\n/cool - Sends a cool emoji face\n/update - See what's new in this update\n/sorry - When you don't know what else to say" );
    this.res.end();
  } 
  else if((request.text && botRegexDuty.test(request.text)) || (request.text && botRegexDuty3.test(request.text))) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
//    postMessage(d.toString());
    var month = d.getMonth();
    var day = d.getDate();
    
    var people = "";
    if (month == 0) {
      people = jan[day-1];
    }
    else if (month == 1) {
      people = feb[day-1];
    }
    else if (month == 2) {
      people = mar[day-1];
    }
    else if (month == 3) {
      people = apr[day-1];
    }
    else if (month == 4) {
      people = may[day-1];
    }
    else if (month == 7) {
      people = aug[day-1];
    }
     else if (month == 8) {
      people = sep[day-1];
    }
     else if (month == 9) {
      people = oct[day-1];
    }
     else if (month == 10) {
      people = nov[day-1];
    }
     else if (month == 11) {
      people = dec[day-1];
    }
    if (day % 2 == 0) {
      postMessage("Today " + people + " are on duty");
    } else if (day % 3 == 0) {
        postMessage("Today's lucky winners are " + people);
    } else {
        postMessage(people + " get to go fight the good fight tonight");
    }
    this.res.end();
  } 
   else if(request.text && botRegexDuty2.test(request.text)) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
    var month = d.getMonth();
    var day = d.getDate();
    var people = "";
    if (month == 0) {
      people = jan[day];
    }
     else if (month == 1) {
      people = feb[day];
    }
    else if (month == 2) {
      people = mar[day];
    }
     else if (month == 3) {
      people = apr[day];
    }
    else if (month == 4) {
      people = may[day];
    }
     else if (month == 7) {
      people = aug[day];
    }
     else if (month == 8) {
      people = sep[day];
    }
     else if (month == 9) {
      people = oct[day];
    }
     else if (month == 10) {
      people = nov[day];
    }
     else if (month == 11) {
      people = dec[day];
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
  else if(request.text && botRegexUp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("New in this update:\nI'm no longer in the wrong timezone! (Sorry for the confusion)");
    this.res.end();
  } 
  else if(request.text && botRegexSor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/RFDXes97gboYg/200_s.gif");
    this.res.end();
  }  
  else if(request.text && botRegexBirb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://imgur.com/dwRfrQm");
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
