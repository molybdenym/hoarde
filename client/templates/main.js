/* @flow */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(1);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button': (event: any, template: any) => {
    // increment the counter when button is clicked
    template.counter.set(template.counter.get() * 2);
  },
});
