import {toDoObject} from "./todoObject";
import './styles.css';
import './PubSub.js'

let item1 = new toDoObject("Make this project", "the odin project", "Soon", "1", "default");
item1.display();