var settings = {
    "url": "http://hpb.health.gov.lk/api/get-current-statistical",
    "method": "GET",
    "timeout": 0,
  };

var tc;
var td;
var nc;
  $.ajax(settings).done(function (response) {
    console.log(response);
    td = response['data']['local_deaths'];
    tc = response['data']['local_deaths'];
    nc = response['data']['local_new_cases'];
    console.log(tc);
  });