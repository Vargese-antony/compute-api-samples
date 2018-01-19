'use strict';

var config = {
	"encoding" : "utf-8",
	//Project Id
	"projectId" : "[PROJECT-ID]",
	"zone": "us-central1-f",
	//instance config
	"type":"compute.v1.instance",
	"instanceConfig" : {
		"name": "the-second-vm",
		"zone": "us-central1-f",
		"machineType": "https://www.googleapis.com/compute/v1/projects/[PROJECT-ID]/zones/us-central1-f/machineTypes/f1-micro",
		"disks": [
			{
				"initializeParams": {
				"sourceImage": "https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/family/debian-8"
				},
				"boot": true,
				"type": "PERSISTENT",
				"autoDelete": true,
				"deviceName": "boot"
			}
		],
		"networkInterfaces": [
			{
				"network": "https://www.googleapis.com/compute/v1/projects/[PROJECT-ID]/global/networks/default",
				"accessConfigs": [
					{
						"name": "External NAT",
						"type": "ONE_TO_ONE_NAT"
					}
				]
			}
		]
	  },
	//Configuration for deployment manager
	"deploymentConfiguration" : {
		"name": "deployment2", //Name of the deployment, this should be unique, find the available deployments from https://console.cloud.google.com/deployments
		"target": {
			"config": {
				"content": "" //Content will be read from a YAML
			}
		}
	}
}

module.exports = config;