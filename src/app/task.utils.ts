import { Priority, Task } from "./task.model";

export function toggleTask(task: Task): Task{
    return { ...task, done: !task.done };
};

export function getActiveTasks(tasks: Task[]): Task[]{
    return tasks.filter((task) => !task.done);
};

export function countByPriority(tasks: Task[], priority: Priority): number{
    return tasks.filter((task => task.priority === priority)).length;
};
