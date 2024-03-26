import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1, 'Project A', 'Project A Açıklama', new Date(2024,2,15),0.10,[
        new Task(1, 'Task A',"Task'ın açıklaması",new Date(2024,2,15),1,false),
        new Task(2, 'Task B',"Task'ın açıklaması",new Date(2024,2,15),1,false),
        new Task(3, 'Task C',"Task'ın açıklaması",new Date(2024,2,15),1,true),

    ],1),
    new Project(2, 'PROJECT B', 'Project A Açıklama', new Date(2024,2,15),0.10,[
        new Task(1, 'Task A',"Task'ın açıklaması",new Date(2024,2,15),2,false),
        new Task(2, 'Task B',"Task'ın açıklaması",new Date(2024,2,15),2,false),
        new Task(3, 'Task C',"Task'ın açıklaması",new Date(2024,2,15),2,true),

    ],2),
    new Project(2, 'pRoJECt C', 'Project A Açıklama', new Date(2024,2,15),0.10,[
        new Task(4, 'Task A',"Task'ın açıklaması",new Date(2024,2,15),1,false),
        new Task(5, 'Task B',"Task'ın açıklaması",new Date(2024,2,15),1,false),
        new Task(6, 'Task C',"Task'ın açıklaması",new Date(2024,2,15),1,true),

    ],3)
]