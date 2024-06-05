//import EmberRouter from '@ember/routing/router';
import EmberRouter from '@embroider/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('embroider-engine');
});
