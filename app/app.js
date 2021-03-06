/**
 * app.js
 *
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

import { saveState } from './localStorage';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/icon-72x72.png';
import '!file-loader?name=[name].[ext]!./images/icon-96x96.png';
import '!file-loader?name=[name].[ext]!./images/icon-128x128.png';
import '!file-loader?name=[name].[ext]!./images/icon-144x144.png';
import '!file-loader?name=[name].[ext]!./images/icon-152x152.png';
import '!file-loader?name=[name].[ext]!./images/icon-192x192.png';
import '!file-loader?name=[name].[ext]!./images/icon-384x384.png';
import '!file-loader?name=[name].[ext]!./images/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./manifest.json';
import 'file-loader?name=[name].[ext]!./.htaccess';

// VENDOR CSS
import '!!style-loader!css-loader!./assets/vendor/bootstrap/css/bootstrap.min.css';
import '!!style-loader!css-loader!./assets/vendor/font-awesome/css/font-awesome.min.css';
import '!!style-loader!css-loader!./assets/vendor/linearicons/style.css';
import '!!style-loader!css-loader!./assets/vendor/chartist/css/chartist-custom.css';
import '!!style-loader!css-loader!./assets/vendor/lightbox/css/lightbox.css';
import '!!style-loader!css-loader!./assets/vendor/dropzone/css/dropzone.css';

// MAIN CSS
import '!!style-loader!css-loader!./assets/css/klorofil.css';
import '!!style-loader!css-loader!./assets/css/style.css';
import '!!style-loader!css-loader!./assets/css/profile.css';
import '!!style-loader!css-loader!./assets/css/search.css';
import '!!style-loader!css-loader!./assets/css/chat.css';


// <!-- GOOGLE FONTS -->
import '!!style-loader!css-loader!./assets/css/fonts.css';
// <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" type="text/css">

import 'script-loader!./assets/vendor/jquery/jquery.min.js';
import './assets/vendor/bootstrap/js/bootstrap.min.js';
import './assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js';
import './assets/js/klorofil-common.js';
import './assets/js/script.js';
/* hard code images TODO delete  */
import '!file-loader?name=[name].[ext]!./assets/img/avatar.jpeg';
import '!file-loader?name=[name].[ext]!./assets/img/language/ru.png';
import '!file-loader?name=[name].[ext]!./assets/img/language/us.png';
import '!file-loader?name=[name].[ext]!./assets/img/java.png';
import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

store.subscribe(() => {
  saveState({
    userSession: store.getState().get('userSession'),
  });
});

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
