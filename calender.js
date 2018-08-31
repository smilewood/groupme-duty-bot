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

