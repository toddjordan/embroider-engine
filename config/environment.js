'use strict';

module.exports = function (environment /*, appConfig */) {
  const ENV = {
    modulePrefix: 'embroider-engine',
    environment,
  };
  return ENV;
};
