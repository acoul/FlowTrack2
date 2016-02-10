#!/usr/bin/env node

/*jslint node: true */
'use strict';

var cluster = require('cluster');
var netflow = require('node-netflowv9');
var es = require('elasticsearch');
var http = require('http');
var config = require('config');

var NetFlowStorage = require('../lib/NetFlowStorage');
var GetLogger = require('../lib/GetLogger');
var FlowTrack2App = require('../lib/FlowTrack2App');


main();
function main() {

    var numCPUs = require('os').cpus().length;

    // Setup our logger instances
    var logger = new GetLogger(process.env.NODE_ENV,'FlowTrack2');
    var expressLogger = new GetLogger(process.env.NODE_ENV, 'FlowTrack2App');

    var nfStore = new NetFlowStorage(es, logger, config);
    var app = new FlowTrack2App(es, expressLogger, config);


    if (cluster.isMaster) {

        // Setup, then fork the flow collection workers
        nfStore.createIndex();

        for (var i = 0; i < numCPUs; i++) {
            cluster.fork();
        }


        // Now start the webservice
        startWebServer(config.get('Application.web_port'), app);


    } else {
        // Setup the worker
        netflow(function (flow) {

            logger.info('%s\t flows', flow.flows.length);
            for (var i = 0; i < flow.flows.length; i++) {
                nfStore.storeFlow(flow.flows[i]);
            }
        }).listen(config.get('Application.netflow_port'));
    }
}



function startWebServer(port, app) {
    var logger = new GetLogger(process.env.NODE_ENV);
    http.createServer(app).listen(port);
    logger.info('Listening on: ' + port);
}