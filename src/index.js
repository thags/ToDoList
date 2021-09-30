import todoObject from './todoitems.js';
import './sub.js';
import PubSub from 'pubsub-js';

const item1 = new todoObject("project", "Odin project", "tomorrow", 1, "in progress", 'default');
new todoObject("project", "Odin project", "tomorrow", 1, "in progress", 'TheOdin');

PubSub.publish('pageLoaded');