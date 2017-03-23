var HTTPS = require('https');
var cool = require('cool-ascii-faces');


var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool/; botRegexSalt = /^\/salt/; botRegexDuty = /^\/duty/; botRegexDuty2 = /^\/tomorrow/; 
      botRegexHelp = /^\/help/; botRegexUp = /^\/update/; botRegexSor = /^\/sorry/; botRegexBirb = /^\#birdsupport/; 
      botRegexV = /^\/V/; 

  //Arrays of duty partners
  var jan = ["no one", "no one", "no one", "no one", "no one", "no one", "no one", "Julia and Rachel T.", "Coby and Luke", "Emma and Tanner", "Braede and Gabby", "Frida and Matt", "Max and Kellie", "Austin and Ashton", "Luke and Ashton", "Max and Braede", "Luke and Frida", "Matt and Ashton", "Rachel T. and Frida", "Ashton and Luke", "Emma and Braede", "Emma and Braede", "Max and Luke", "Emma and Luke", "Matt and Coby", "Julia and Kellie", "Braded and Austin", "Ashton and Max", "Ashton and Max", "Max and Braede", "Tanner and Emma", "Coby and Max"]; 
  var feb = ["Rachel T. and Kellie", "Julia and Gabriella", "Luke and Austin", "Luke and Austin", "Frida and Max", "Tanner and Ashton", "Austin and Rachel M.", "Matt and Kellie", "Braede and Austin", "Rachel M. and Coby", "Rachel M. and Coby", "Rachel T. and Frida", "Tanner and Emma", "Ashton and Kellie", "Rachel T. and Gabriella", "Austin and Julia", "Matt and Frida", "Matt and Frida", "Coby and Max", "Tanner and Emma", "Rachel M. and julia", "Matt and Luke", "Coby and Frida", "Tanner and Kellie", "Tanner and Kellie", "Braede and Luke", "Luka and Kellie", "Austin and Gabriella", "", ""]; 
  var mar = ["Matt and Rachel M.", "Austin and Emma", "Gabriella and Julia", "Gabriella and Julia", "Matt and Ashton", "Tanner and Emma", "Ashton and Gabriella", "Coby and Kellie", "Julia and Coby", "Luke and Frida", "Luke and Frida", "Some random people", "That one person", "?????????", "My favorite person whose name I forgot", "IDK who", "I can't always tell you who", "That one RA with the face and the one with the hair", "Max and Frida", "Tanner and Emma", "Rachel M. Gabriella", "Gabriella and Julia", "Rachel M. and Braede", "Coby and Luke", "Coby and Luke", "Max and Braede", "Julia and Kellie", "Rachel M. and Ashton", "Matt and Braede", "Austin and Emma", "Austin and Rachel T."]; 
  var apr = ["Austin and Telljohn", "Max and Kellie", "Tanner and Luke", "Austin and Telljohn", "McCormick and Kellie", "Julia and Gabby", "McCormick and Braede", "McCormick and Braede", "Telljohn and Frida", "Tanner and Max", "Coby and Gabby", "Julia and McCormick", "Frida and Braede", "Emma and Max", "Emma and Max", "Julia and Matt", "Tanner and Kellie", "Matt and Gabby", "Coby and McCormick", "Braede and Austin", "Matt and Telljohn", "Matt and Telljohn", "Luke and Emma", "Tanner and Ashton", "Telljohn and Gabby", "Frida and Matt", "Coby and Austin", "Kellie and Julia", "Kellie and Julia", "Telljohn and Frida",]; 
  var may = ["Ashton and Emma", "Telljohn and McCormick", "Emma and Gabby", "Coby and McCormick", "Tanner and Gabriella", "Tanner and Gabriella", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]; 

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
  else if(request.text && botRegexDuty.test(request.text)) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
//    postMessage(d.toString());
    var month = d.getMonth();
    var day = d.getDate();
    
    var people = "";
    if (month == 0) {
      people = jan[day];
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
    postMessage("Today " + people + " are on duty");
    this.res.end();
  } 
   else if(request.text && botRegexDuty2.test(request.text)) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
    var month = d.getMonth();
    var day = d.getDate();
    var people = "";
    if (month == 0) {
      people = jan[day+1];
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
    
    postMessage("Tomorrow " + people + " are on duty");
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
