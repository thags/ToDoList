import {toDoObject} from "./todoObject";
import './styles.css';
import './PubSub.js'
import {createAddProjectButton} from "./projectsDOM.js"
import {createDarkBackground, hideDarkBackground} from "./popUpDOM.js";

createAddProjectButton();
let item1 = new toDoObject("Make this project", "the odin project", "Soon", "1", "default");
item1.display();

createDarkBackground();
hideDarkBackground();