var https = require('https');
//var lead_id = 100100001758625 ?fields=Name,StatusCode&StatusCode=UNQUALIFIED&limit=5
function customWait(){
  console.log('Waiting ...');
}

var statusCd = 'CONVERTED';
function searchLead(statusCode,callBack){
  var options = {
    host: 'fuscdrmsmc253-fa-ext.us.oracle.com',
    //port: 80,
    auth: 'sales_admin:Welcome1',
    path: '/crmRestApi/resources/latest/leads?fields=LeadId,Name&q=StatusCode='+statusCode+'&limit=5&onlyData=true',
    headers: {
        'Content-Type': 'application/vnd.oracle.adf.resourceitem+json'
      },
    method: 'GET'
  };

  var response_data='';
  var result = '';
  
  var req = https.request(options, (res) => {
    res.on('data', (chunk) => {
        response_data = response_data + chunk.toString();
      });
    res.on('end', () => {
        var resp = JSON.parse(response_data);
        for (var i in resp.items) {
            result = result + ', '+resp.items[i].Name;
            console.log(resp.items[i].LeadId + ' - '+resp.items[i].Name);
          }
          callBack(result);
      });
  });
  req.on('error', (e) => {
    console.error(e);
    });
  req.end();
}
searchLead(statusCd,(res)=>{
  console.log('Final Result from callback: '+res);
});