"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();
var https = require('https');

function queryLead(statusCode){
    //var lead_id = 100100001758625 ?fields=Name,StatusCode&StatusCode=UNQUALIFIED&limit=5
    //var statusCd = 'CONVERTED';
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
      var leadList='';
      
      var req = https.request(options, (res) => {
        res.on('data', (chunk) => {
            response_data = response_data + chunk.toString();
          });
        res.on('end', () => {
            var resp = JSON.parse(response_data);
            for (var i in resp.items) {
                //console.log(resp.items[i].LeadId + ' - '+resp.items[i].Name);
                leadList = leadList + resp.items[i].Name +', ';
              }
          });
      });
      
      req.on('error', (e) => {
        console.error(e);
        });
      req.end();
      return leadList;
}

module.exports = {

        metadata: () => (
        {
            "name": "hello",
            "properties": {
                "statusCode": { "type": "string", "required": true }
            },
            "supportedActions": []
        }
    ),

    invoke: (conversation, done) => {
        const statusCode = conversation.properties().statusCode? conversation.properties().name : '';
        var response_text = '';
        if(statusCode === 'QUALIFIED' || statusCode === 'UNQUALIFIED' || statusCode === 'CONVERTED'){
            response_text = 'Your top 5 '+statusCode+' Leads : '+convertLead(statusCode);
        }
        else{
            response_text = 'The StatusCode: '+statusCode+' is not a valid Lead Status. Please Try again.';
        }
        conversation.reply({ text: response_text });
        conversation.transition();
        done();
    }
};
