var https = require('https');
//var lead_id = 100100001758625 ?fields=Name,StatusCode&StatusCode=UNQUALIFIED&limit=5
var options = {
    host: 'fuscdrmsmc217-fa-ext.us.oracle.com',
    //port: 80,
    auth: 'sales_admin:Welcome1',
    path: '/crmRestApi/resources/latest/leads',
    headers: {
        'Content-Type': 'application/vnd.oracle.adf.action+json'
      },
    method: 'POST'
  };

var lead_data = {
  "name": "convertLeadToOpty",
  "parameters": [
  {
  "leadId": '300100126686010'
  }
  ]
  };

  var response_data='';
  
  var req = https.request(options, (res) => {
    console.log('Status: '+res.statusCode)
    res.on('data', (chunk) => {
        response_data = response_data + chunk.toString();
      });
    res.on('end', () => {
        //var resp = response_data;
        var resp = JSON.parse(response_data);
        if(resp.result === 'Successful'){
          console.log("Lead Converted Successully.")
        }
        else{
          console.log("Lead Converted Failed.")
        }
      });
  });
  req.on('error', (e) => {
      console.log('Error');
      console.error(e);
    });

  req.write(JSON.stringify(lead_data));
  req.end();