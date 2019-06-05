//Install express server
import expressGraphql from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';

import schema from './graphql/';
import rp from 'request-promise';
import parser from 'xml2json';

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

app.get('/getDeals',(req,res)=>{
  var options = {
    method: 'GET',
    uri: 'http://couponfeed.linksynergy.com/coupon?token=2b921009a117ec1696a89e3db464a6e47aeace9cc3c917317558e50aa6fd5099&network=1&resultsperpage=10&pagenumber=2',
    json: true // Automatically stringifies the body to JSON
  };

  rp(options)
    .then(function (xml) {
      res.send(parser.toJson(xml));
    })
    .catch(function (err) {
      console.log("Error",err)
    });
});


app.get('/getCategories',(req,res)=>{

  var options = {
    method: 'GET',
    uri: 'http://couponfeed.linksynergy.com/coupon?token=2b921009a117ec1696a89e3db464a6e47aeace9cc3c917317558e50aa6fd5099&promocat=1',
    json: true // Automatically stringifies the body to JSON
  };

  rp(options)
    .then(function (xml) {
      let response = JSON.parse(parser.toJson(xml));

      let usNetwork = response.couponfeed ? response.couponfeed.network.filter(network=> network.id === "1") : {};
      res.send(usNetwork[0].categories.category);
    })
    .catch(function (err) {
      console.log("Error",err)
    });

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () =>
{
  console.log('listening on Port', process.env.PORT || 8080)
});
