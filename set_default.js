// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC9668210d9014ca5043994167da3ad6bf';
const authToken = 'f595620dcff31c7220e74c6ebbcdab85';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('UAd5bfc703c190f3bc80648151ce6dc9c7')
                .defaults()
                .update({defaults: {
                     defaults: {
                         assistant_initiation: 'task://welcome',
                         fallback: 'task://welcome'
                     }
                 }})
                .then(defaults => console.log(defaults.assistantSid))
                .done();
