var https = require('https');
//var lead_id = 100100001758625 ?fields=Name,StatusCode&StatusCode=UNQUALIFIED&limit=5

var statusCd = 'Sept29Lead48';
var options = {
    host: 'fuscdrmsmc299-fa-ext.us.oracle.com',
    //port: 80, 300100130031199
    auth: 'SALES_ADMIN:Welcome1',
    path: '/crmRestApi/resources/latest/leads/describe',
    headers: {
        'Content-Type': 'application/vnd.oracle.adf.resourceitem+json'
      },
    method: 'GET'
  };

  var response_data='';
  
  var req = https.request(options, (res) => {
    console.log('Status: '+res.statusCode)
    res.on('data', (chunk) => {
        response_data = response_data + chunk.toString();
      });
    res.on('end', () => {
      console.log('Payload: '+response_data);
        /*var resp = JSON.parse(response_data);
        console.log('Payload: '+resp);
        for (var i in resp.items) {
            console.log(resp.items[i].LeadId + ' - '+resp.items[i].Name);
          }*/
      });
  });
  req.on('error', (e) => {
    console.error(e);
    });
  req.end();