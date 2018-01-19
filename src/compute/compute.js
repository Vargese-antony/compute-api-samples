// Copyright 2013-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Samples are refered from the URL https://cloud.google.com/compute/docs/reference/
 */

'use strict';

const request = require('request');
const google = require('googleapis');
//Configuration parameters
const config = require('../config/config');

/**
 * Scopes needed for insert API authorization as per the documentaion.
 * Reference - https://cloud.google.com/compute/docs/reference/latest/instances/insert
 */
var SCOPES = [
  'https://www.googleapis.com/auth/compute',
	'https://www.googleapis.com/auth/cloud-platform'
];
//Load the authentication module
const sampleClient = require('../auth/sampleclient');
//Load the compute engine api version v1 by providing the google.auth.OAuth2
const compute = google.compute({
  version: 'v1',
  auth: sampleClient.oAuth2Client
});

function listZones() {
  compute.zones.list({
     project : config.projectId
    }, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
  });
}
/**
 * Creates Instance resource for a specific project
 */
function createInstance() {
  var request = {
    // Project ID for this request.
    project: config.projectId,
    // The name of the zone for this request.
    zone: config.zone,
    // properties to the request body.
    resource: config.instanceConfig
  };
  compute.instances.insert(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.stringify(response, null, 2));
    process.exit();
  });
}

function run() {
  sampleClient.authenticate(SCOPES, err => {
    if (err) {
      throw err;
    }
    //listZones();
    createInstance();
  });
}
if (module === require.main) {
  run();
}

module.exports = {
  'run' : run
}