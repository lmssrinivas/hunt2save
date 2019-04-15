//Install express server
import expressGraphql from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';

import schema from './graphql/';

const app = express();

mongoose
  .connect('mongodb+srv://admin:hunt2save@cluster0-qbqxj.mongodb.net/hunt2save?retryWrites=true',
    {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  .then(() =>
  {
    console.log('Connected to Databse');

  })
  .catch(err =>
  {
    console.log(err);
  });

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.use('/api',
  bodyParser.json(),
  cors(),
  expressGraphql({
  schema,
  graphiql: true
}));


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () =>
{
  console.log('listening on Port', process.env.PORT || 8080)
});
