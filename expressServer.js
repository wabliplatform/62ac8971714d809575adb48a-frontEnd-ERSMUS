const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','ACCOUNT.html')));
			this.app.get('/ACCOUNT', (req, res) => res.sendFile(path.join(__dirname,'html','ACCOUNT.html')));
			this.app.get('/ACCOUNT/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ACCOUNT.html')));
			this.app.get('/CreateAnAccount', (req, res) => res.sendFile(path.join(__dirname,'html','CreateAnAccount.html')));
			this.app.get('/CreateAnAccount/:id', (req, res) => res.sendFile(path.join(__dirname,'html','CreateAnAccount.html')));
			this.app.get('/SubmitReport', (req, res) => res.sendFile(path.join(__dirname,'html','SubmitReport.html')));
			this.app.get('/SubmitReport/:id', (req, res) => res.sendFile(path.join(__dirname,'html','SubmitReport.html')));
			this.app.get('/Home', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/Home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/TripDetails', (req, res) => res.sendFile(path.join(__dirname,'html','TripDetails.html')));
			this.app.get('/TripDetails/:id', (req, res) => res.sendFile(path.join(__dirname,'html','TripDetails.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;