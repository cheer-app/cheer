https://cheer-io.herokuapp.com/

Please note that this is deployed with the free Heroku plan, and the memory required to start the app is just slightly over the allowed quota. Please refresh if you get an error (usually this works, but you may need to refresh more than once), and forgive our penuriousness.

# Cheer

Cheer is an application that provides employers with an easy way to gather employee feedback via their existing Slack work-flows. Employees respond to daily questions in Slack, and their answers are passed through IBM Watson’s Natural Language Understanding API to identify the emotions and sentiment. This data is then visualized in a web-app so the employer can identify trends in company morale and take corrective actions or celebrate successes.

## Getting Started

### Prerequisites
You'll need Node.js for this!
https://nodejs.org/
You'll also need to set up your database:
https://cloud.mongodb.com/
IBM Watson, too:
https://www.ibm.com/watson
And a Slack app:
https://api.slack.com/

### Installing
Make a .env, and put all the relevant auth info from the above named services in it
npm install
npm run start-dev

### Technologies Used

MongoDB/Mongoose
Express
GraphQL
React
Apollo
Victory
Recharts
Material-UI

### 3rd Party API's
IBM Watson
Slack


