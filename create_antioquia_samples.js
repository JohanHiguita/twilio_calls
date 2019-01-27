
// Download the helper library from https://www.twilio.com/docs/node/install
const accountSid = 'AC9668210d9014ca5043994167da3ad6bf';
const authToken = 'f595620dcff31c7220e74c6ebbcdab85';
const client = require('twilio')(accountSid, authToken);

phrases = [
 'What is the capital of Antioquia?',
 'Antioquia\'s capital',
 'How is the name of the Capital of Antioquia?',
 'What is the name of the Capital of Antioquia?',
 'How is the name of Antioquia\'s capital?',
 'What is the name of Antioquia\'s capital?',
 'Capital of Antioquia'
]

// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
// Replace 'UDXXX...' with the SID for the task you just created.
phrases.forEach(function(item) {
  sample = client.autopilot.assistants('UAd5bfc703c190f3bc80648151ce6dc9c7')
                           .tasks('tell-antioquia-capital')
                           .samples
                           .create({
                             language: 'en-us',
                             taggedText: item,
                           })
                           .then(sample => console.log(sample.sid))
                           .done();
})
