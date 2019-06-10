//Install express server
import expressGraphql from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import schema from './graphql/';
import rp from 'request-promise';
import parser from 'xml2json';
import ejs from 'ejs';
const port= process.env.PORT || 8080;
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

//Set the template engine to HTML
app.set('views','./dist');
app.set('views engine','html');
app.engine('html',ejs.renderFile);

// Serve only the static files form the dist directory
app.use(express.static('./dist'));


app.get('/api/getDeals',(req,res)=>{
  var options = {
    method: 'GET',
    uri: 'http://couponfeed.linksynergy.com/coupon?token=2b921009a117ec1696a89e3db464a6e47aeace9cc3c917317558e50aa6fd5099&network=1&resultsperpage=10&pagenumber=280'
  };

  rp(options)
    .then(function (xml) {
      res.send(parser.toJson(xml));
    })
    .catch(function (err) {
      console.log("Error",err)
    });
});


app.get('/api/getCategories',(req,res)=>{

  var options = {
    method: 'GET',
    uri: 'http://couponfeed.linksynergy.com/coupon?token=2b921009a117ec1696a89e3db464a6e47aeace9cc3c917317558e50aa6fd5099&promocat=1'
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

app.get('/api/getCategoryDeals/:id',(req,res)=>{

  var options = {
    method: 'GET',
    uri: `http://couponfeed.linksynergy.com/coupon?token=2b921009a117ec1696a89e3db464a6e47aeace9cc3c917317558e50aa6fd5099&category=${req.params.id}`
  };

  rp(options)
    .then(function (xml) {
      let response = JSON.parse(parser.toJson(xml));
      res.send(response.couponfeed.link);
    })
    .catch(function (err) {
      console.log("Error",err)
    });

});

app.use('/api',
  bodyParser.json(),
  cors(),
  expressGraphql({
  schema,
  graphiql: true
}));

app.use('/*',function(req,res,next){
  res.render('index.html');
  next();
});



// Start the app by listening on the default Heroku port
app.listen(port, () =>
{
  console.log('listening on Port', port)
});
