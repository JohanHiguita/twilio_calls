
// Download the helper library from https://www.twilio.com/docs/node/install

// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC9668210d9014ca5043994167da3ad6bf';
const authToken = 'f595620dcff31c7220e74c6ebbcdab85';
const client = require('twilio')(accountSid, authToken);

// Provide actions for the new task
antioquiaActions = {
  actions: [
    { say: 'The capital of Antioquia is Medellín' }
  ]
}

// Create a new task named 'tell_a_joke'
// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
task = client.autopilot.assistants('UAd5bfc703c190f3bc80648151ce6dc9c7')
                       .tasks
                       .create({
                         uniqueName: 'tell-antioquia-capital',
                         actions: antioquiaActions,
                       })
                       .then(task => console.log(task.sid))
                       .done();
