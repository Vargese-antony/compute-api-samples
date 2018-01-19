'use strict'

//Deploy a new instance using Google compute engine API

//var compute = require('./compute/compute');
//compute.run();

//Deploy the resources using deployment API from YAML
var deployment = require('./deployment-manager/deployment-manager');
deployment.run();
