var request = {
  ACCESS_TOKEN: 'FIGURE_ME_OUT',
  CLIENT_ID: 'amzn1.application-oa2-client.b4410251e2674ae09b17315f30a75947',
  url: 'https://api.audible.com/1.0/content/B0099RKRTY/licenserequest',
  data: {
    "Consumption_type":"Streaming",
    "Drm_type":"Hls"
  }
}

// access token

$(document).ready(function() {

  $.ajax({
    url: request.url,
    type: 'POST',
    dataType: 'json',
    data: request.data,
    headers: {
      'Authorization': ('bearer ' + request.ACCESS_TOKEN),
      'Client-ID': request.CLIENT_ID,
      'Accept' : 'application/json'
    }
  })
  .done(function(data) {
    console.log("success", data);
  })
  .fail(function(e) {
    console.log("error:", e.statusText);
  });

});
