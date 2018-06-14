var payload = [ {
      "Name" : "Sept29Lead48",
      "LeadId" : 100100013799795
    }, {
      "Name" : "Sept29Lead48",
      "LeadId" : 100100001962472
    }, {
      "Name" : "Sept29Lead48",
      "LeadId" : 100100002136834
    }, {
      "Name" : "Sept29Lead48",
      "LeadId" : 100100002191792
    }, {
      "Name" : "Sept29Lead48",
      "LeadId" : 100100001907203
    } ];

//var elem = JSON.parse(payload);
console.log(payload);

for (var i in payload) {
    console.log(payload[i].LeadId + ' - '+payload[i].Name);
}