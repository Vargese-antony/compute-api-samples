/**
 * Reference - https://cloud.google.com/deployment-manager/docs/reference/latest/deployments/insert
 */

'use strict';

const google = require('googleapis');
var fs = require('fs');

//Configuration parameters
const config = require('../config/config');
//YAML file to read
const yamlFile = './src/config/two-vms.yaml';

//Load the authentication module
const sampleClient = require('../auth/sampleclient');

function createDeployment() {
	//Create deployment manager object
	const deploymentManager = google.deploymentmanager({
		version: 'v2',
		auth: sampleClient.oAuth2Client
	});

	//Read the YAML file and set the content of the file in the 'target.config.content' property
	config.deploymentConfiguration.target.config.content = fs.readFileSync(yamlFile,config.encoding);

	//Construct the request header
	var request = {
	  // The project ID for this request.
	  project: config.projectId,
	  resource: config.deploymentConfiguration
	};
	deploymentManager.deployments.insert(request, function(err, response) {
	  if (err) {
			console.error(err);
			return;
	  }
	  console.log(JSON.stringify(response));
	});
}

function run() {
	/**
 * Scopes needed for insert deployment API authorization as per the documentaion.
 * Reference - https://cloud.google.com/deployment-manager/docs/reference/latest/deployments/insert
 */
	var SCOPES = [
		'https://www.googleapis.com/auth/cloud-platform',
		'https://www.googleapis.com/auth/ndev.cloudman'
	];

	sampleClient.authenticate(SCOPES, err => {
	  if (err) {
			throw err;
		}
	  createDeployment();
	});
}

if (module === require.main) {
	run();
}

module.exports = {
	'run' : run 
}