'use strict';

const getChannelURL = require('ember-source-channel-url');
const {
  embroiderSafe /*, embroiderOptimized*/,
} = require('@embroider/test-setup');

module.exports = async function () {
  return {
    scenarios: [
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      embroiderSafe(),
      //embroiderOptimized(),
    ],
  };
};
