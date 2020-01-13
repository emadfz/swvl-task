const express = require('express');
const cors = require('cors');
const notificationsRoutes = require('./routes/notifications');
const mongoose = require('mongoose');
const {Consumer} = require('sqs-consumer');
const queryHandler = require('./app/queueHandler');

// queue polling start
const queue = Consumer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/655889427334/swvl',
  handleMessage: async (message) => { queryHandler.processMessage(message.Body) } 
});
queue.on('error', (err) => {
  console.error(err.message);
});
queue.on('processing_error', (err) => {
  console.error(err.message);
});
queue.start();
// queue end

const port = 3000
const app = express()
app.use(cors())
app.use(express.json())    


mongoose.connect('mongodb://mongo/swvl', function (err, client) {
  if (err) throw err
})


 app.use('/api', notificationsRoutes);

  app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`listening on port ${port}!`))
