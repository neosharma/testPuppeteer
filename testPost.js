var https = require('https');
//var lead_id = 100100001758625 ?fields=Name,StatusCode&StatusCode=UNQUALIFIED&limit=5
var options = {
    host: 'fuscdrmsmc153-fa-ext.us.oracle.com',
    //port: 80,
    auth: 'sales_admin:Welcome1',
    path: '/crmRestApi/resources/latest/leads',
    headers: {
        'Content-Type': 'application/vnd.oracle.adf.resourceitem+json'
      },
    method: 'POST'
  };

var leadName = 'Lead-'+new Date().getTime();
var lead_data = {
  'Name' : leadName
};

  var response_data='';
  
  var req = https.request(options, (res) => {
    res.on('data', (chunk) => {
        response_data = response_data + chunk.toString();
      });
    res.on('end', () => {
        //var resp = response_data;
        var resp = JSON.parse(response_data);
        console.log(resp.LeadId + ' - '+resp.Name+' Created Successfully.');
      });
  });
  req.on('error', (e) => {
    console.error(e);
    });

  req.write(JSON.stringify(lead_data));
  req.end();