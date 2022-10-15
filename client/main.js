import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

// On start, instantiate a new todo App instance and insert it into the div container of the main.html
Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});