import { Component, input, output } from '@angular/core';
import { Filter } from '../task.model';

@Component({
  selector: 'app-task-filter',
  imports: [],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css',
})
export class TaskFilter {
  current = input.required<Filter>();
  changed = output<Filter>();
}
