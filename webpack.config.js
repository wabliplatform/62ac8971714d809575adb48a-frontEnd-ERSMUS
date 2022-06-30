const path = require('path');

module.exports = {
  entry: {
	'ACCOUNT' : './javascript/ACCOUNT.js',
	'CreateAnAccount' : './javascript/CreateAnAccount.js',
	'SubmitReport' : './javascript/SubmitReport.js',
	'Home' : './javascript/Home.js',
	'TripDetails' : './javascript/TripDetails.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};