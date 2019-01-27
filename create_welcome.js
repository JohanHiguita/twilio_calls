
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC9668210d9014ca5043994167da3ad6bf';
const authToken = 'f595620dcff31c7220e74c6ebbcdab85';
const client = require('twilio')(accountSid, authToken);

// Build task actions that say something and listens for a repsonse.
welcomeTaskActions = {
  actions: [
    { say: 'Hi!, I am de digital Assistant developed by: Johan Esteban Higuita, I can answer questions about geography of Colombia!. What would you like to know?' },
    { listen: true }
  ]
};

// Create the hello_world task
// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
client.autopilot.assistants('UAd5bfc703c190f3bc80648151ce6dc9c7')
                .tasks
                .create({
                  uniqueName: 'welcome',
                  actions: welcomeTaskActions,
                })
                .then(assistant => console.log(assistant.sid))
                .done();





