// Download the helper library from https://www.twilio.com/docs/node/install
const accountSid = 'AC9668210d9014ca5043994167da3ad6bf';
const authToken = 'f595620dcff31c7220e74c6ebbcdab85';
const client = require('twilio')(accountSid, authToken);

phrases = [
    'hello',
    'hi',
    'Hello',
    'Hi there',
    'Hola',
    'Hey'
]

// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
phrases.forEach(function(item) {
  sample = client.autopilot.assistants('UAd5bfc703c190f3bc80648151ce6dc9c7')
                           .tasks('welcome')
                           .samples
                           .create({
                             language: 'en-us',
                             taggedText: item,
                           })
                           .then(sample => console.log(sample.sid))
                           .done();
})
