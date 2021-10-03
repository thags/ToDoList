import {toDoObject} from "./todoObject";
import './styles.css';
import './PubSub.js'

let item1 = new toDoObject("Make this project", "the odin project", "Soon", "1", "default");
item1.display();
let item2 = new toDoObject("test", "the odin project", "Soon", "1", "test");
item2.display();


PubSub.publish('pageLoaded', null);
