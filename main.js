const express = require('express');
const AWS = require('aws-sdk')
const dynamoose = require("dynamoose");


require('dotenv')

const apiRoutes = require('./src/index.js')

const app = express();


const {engine} = require('express-handlebars');
const { DocumentClient } = require('aws-sdk/clients/dynamodb.js');
app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/src/views')

app.use('/fotos', express.static(__dirname + '/PhotoFiles'))
app.use('/assets', express.static(__dirname + '/assets'))

app.use(express.urlencoded());
app.use(express.json());

app.use(apiRoutes)

const port = process.env.PORT||3000;

app.get('', (req, res)=>{
    //res.sendFile(__dirname+'/src/views/index.html')
    res.render('registro')
})
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": "us-east-1"
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb)

app.listen(3000, ()=>{
    console.log('app is runnin in port 3000 ')})
                       
        


