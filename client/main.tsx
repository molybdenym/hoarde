// Modules
import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// Libs
// Components
import { App } from './components/App';
// Styles
// Types


Meteor.startup(() => {
  ReactDom.render(<App />, document.getElementById('app'));
});
