'use strict';

module.exports.index = async (event, context, callback) => {
  	
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  if (headers['cloudfront-is-mobile-viewer'] && headers['cloudfront-is-mobile-viewer'][0].value === 'true') {
      request.uri = '/lite' + request.uri;
  }

  callback(null, request);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
