const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const corsOptions = {origin: true,  sameSite: 'None', access_control: 'Allow-Origin'};
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotenv.config();                        // read from .env
// const mongoose = require('mongoose');   // connet to mongoDB

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.enable("trust proxy");
app.use(cors(corsOptions));
console.log(cors({}));


var SolrNode = require('solr-node');
var client = new SolrNode({
    host: 'localhost',
    port: '8983',
    core: 'yelp_review',
    protocol: 'http'
});
// const express = require('express');
// const app = express();
app.get('/select',
function (req, res) 
{
    var { search } = req.query;
    var query = search.split(' ').map((each) => 'text:'+each).join(' AND ');
    console.log(query);

var strQuery = client.query().q(query);
client.search(strQuery, function (err, result) {
if (err) {
  console.log(err);
  return;
}
console.log('Response:', result.response);
res.send(result.response);
});
}); 
app.listen(3000, 
function () { 
console.log('Example app listening on port 3000!') });


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.options('*', function (req,res) { res.sendStatus(200); });

const hello = (req, res) => res.send({ hello: 'world' });
app.get('/', hello);

// const passport = require('passport');
// auth(app, passport);
// articles(app);
// profile(app);
// following(app);

// const uri = process.env.ATLAS_URI;
// the uri is where db stored
// mongoose.connect("mongodb+srv://syx99:yesfir@cluster0.qkfu6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err) => {
//     if (err) throw err;
//     else {
//         console.log("MongoDB database connection established successfully.");
//     }
// });

// Get the port from the environment, i.e., Heroku sets it
// const port = process.env.PORT || 4567;
// const server = app.listen(port, () => {
//     const addr = server.address();
//     console.log(`Server listening at http://${addr.address}:${addr.port}`)
// });
