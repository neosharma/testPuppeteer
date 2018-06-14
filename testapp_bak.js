var https = require('https');
//var lead_id = 100100001758625 ?fields=Name,StatusCode&StatusCode=UNQUALIFIED&limit=5
var options = {
    host: 'fuscdrmsmc160-fa-ext.us.oracle.com',
    //port: 80,
    auth: 'sales_admin:Welcome1',
    path: '/crmRestApi/resources/latest/leads?fields=LeadId,Name&q=StatusCode=UNQUALIFIED&limit=5&onlyData=true',
    headers: {
        'Content-Type': 'application/vnd.oracle.adf.resourceitem+json'
      },
    method: 'GET'
  };

  var response_data=''

  
  var req = https.request(options, (res) => {
    //console.log('STATUS: ' + res.statusCode);
    //console.log('HEADERS: ' + JSON.stringify(res.headers));
    //res.setEncoding('utf8');
    res.on('data', (chunk) => {
        //console.log(`BODY: ${chunk}`);
        response_data = response_data + chunk.toString();
      });
    res.on('end', () => {
        var resp = JSON.parse(response_data);
        for (var i in resp.items) {
            console.log('Lead Name: '+resp.items[i].Name);
          }
      });
  });
  req.on('error', (e) => {
    console.error(e);
    });
  //req.write(response_data);
  req.end();