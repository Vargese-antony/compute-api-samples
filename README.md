# Compute Engine API Samples 1 - instance API of deplyment manager(v2) and compute API (v1) 

The Google Compute Engine and deployment manager API's lets you to create and manage virtual machine instances and resources for a project.

### Before you begin

1.  Select or create a Cloud Platform project in https://console.cloud.google.com/project

2.  Enable the Google Compute Engine API in https://console.cloud.google.com/flows/enableapi?apiid=compute.googleapis.com

3.  Set up OAuth 2.0 client Id for Web Application and authorized redirect URIs for you project - https://developers.google.com/identity/protocols/OAuth2UserAgent
	Set the authorized redirect URI as 'http://localhost:3000/oauth2callback'

### Running the sample
	1. Install node modules:
    	> $ npm install

	2. Setup the PROJECT_ID, CLIENT_ID and CLIENT_SECRET:
		You can find these pieces of information by going to the Developer Console https://console.cloud.google.com 
			- Project --> API Credentials --> Credentials.

		1. In the file 'src/auth/oauth2.keys.json', replace the [CLIENT-ID] and [CLIENT-SECRET] with the values you have set in the OAuth 2.0 page of your project.
		2. In the file 'src/config/config.js', src/config/two-vms.yaml and in 'src/auth/oauth2.keys.json' replace the [PROJECT-ID] with the actual value
	
	3. If you are running the deployment manager API, make sure you have the unique deployment name.
		You can find the existing deployments for a project by going to the developer console https://console.cloud.google.com/deployments
			- Select the project from the drop down.

	4. Run the sample:
		> $ npm start

### References

https://cloud.google.com/compute/docs/reference/latest/instances
https://cloud.google.com/deployment-manager/docs/reference/latest/
https://console.cloud.google.com/project
https://console.cloud.google.com
https://support.google.com/cloud/answer/6293499#enable-billing
https://console.cloud.google.com/flows/enableapi?apiid=compute.googleapis.com
https://cloud.google.com/deployment-manager/docs/
https://developers.google.com/identity/protocols/OAuth2UserAgent
https://github.com/googleapis/nodejs-compute
https://github.com/google/google-api-nodejs-client
