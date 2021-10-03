import PubSub from "pubsub-js";

class projects{
    constructor(projectName){
        this.projectName = projectName;
        PubSub.publish("createProject", this);
    }
}

export default projects;