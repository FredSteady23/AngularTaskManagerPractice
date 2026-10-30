import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getActiveTasks, toggleTask, countByPriority } from './task.utils';
import { Task, Filter} from './task.model';
import { TaskFilter } from './task-filter/task-filter';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskFilter, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tasks = signal<Task[]>([
    { id: 1, title: 'Изучить TypeScript', done: true, priority: 'low', description: 'Изучить основные типы и интерфейсы' },
    { id: 2, title: 'Изучить Angular', done: false, priority: 'high', description: 'Разобраться с компонентами и шаблонами' },
    { id: 3, title: 'Сделать домашнее задание', done: false, priority: 'medium', description: 'Выполнить практические упражнения' },
    { id: 4, title: 'Прочитать книгу', done: false, priority: 'low', description: 'Прочитать 20 страниц' },
    { id: 5, title: 'Повторить JavaScript', done: true, priority: 'medium' },
  ]);

  filter = signal<Filter>('all');
  visibleTasks = computed(()=>{
    const list = this.tasks();
    switch(this.filter()){
      case 'active': return list.filter((t) => !t.done);
      case 'done': return list.filter((t) => t.done);
      default: return list;
    }
  });

  activeCount = computed(()=>getActiveTasks(this.tasks()).length);

  constructor() {}

  toggle(task: Task) {
    this.tasks.update((list) =>
      list.map((t) => (t.id === task.id ? toggleTask(t) : t))
    );
  }
}
