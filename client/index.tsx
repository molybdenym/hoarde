import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './components/App';

Meteor.startup(() => {
  ReactDom.render(<App />, document.getElementById('app'));
});
