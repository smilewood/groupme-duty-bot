 var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salt/; botRegexDuty = /^\/duty/; botRegexDuty2 = /^\/tomorrow/; 
      botRegexHelp = /^\/help/; botRegexTan = /^\/tanner/;
    //Arrays of duty partners
  var jan = ["no one", "no one", "no one", "no one", "no one", "no one", "no one", "Julia and Rachel T.", "Coby and Luke", "Emma and Tanner", "Braede and Gabby", "Frida and Matt", "Max and Kellie", "Austin and Ashton", "Luke and Ashton", "Max and Braede", "Luke and Frida", "Matt and Ashton", "Rachel T. and Frida", "Ashton and Luke", "Emma and Braede", "Emma and Braede", "Max and Luke", "Emma and Luke", "Matt and Coby", "Julia and Kellie", "Braded and Austin", "Ashton and Max", "Ashton and Max", "Max and Braede", "Tanner and Emma", "Coby and Max"]; 
  var feb = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]; 
  var mar = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]; 
  var apr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]; 
  var may = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]; 

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexHelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I am here to help! Here is a list of things I can do:\n/duty - Gives the two people on duty today\n/tomorrow - Gives the two people on duty tomorrow\n/salt - Don't use unless things get salty\n/cool guy - Sends a cool guy face" );
    this.res.end();
  } 
  else if(request.text && botRegexDuty.test(request.text)) {
    this.res.writeHead(200);
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var people = "";
    if (month == 0) {
      people = jan[day];
    }
    postMessage("Today " + people + " are on duty");
    this.res.end();
  } 
   else if(request.text && botRegexDuty2.test(request.text)) {
    this.res.writeHead(200);
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var people = "";
    if (month == 0) {
      people = jan[day+1];
    }
    postMessage("Tomorrow " + people + " are on duty");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexTan.test(request.text)) {
    this.res.writeHead(200);
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var found = 0;
      if (month == 0) {
        while (day <= 31 && found == 0) {
          var now = jan[day]
          if (now.indexOf("Tanner") > -1) {
            found = 1;
          } else {
            day = day + 1;
          }
        }
        postMessage("Tanner, your next duty night is on Jan" + day );
      }
    
    postMessage("Tanner, your next duty night is on " + );
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

  botResponse = response

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


exports.respond = respond;
