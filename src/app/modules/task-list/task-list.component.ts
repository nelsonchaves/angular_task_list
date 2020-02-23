import { Component, OnInit, Input } from '@angular/core';
import { TaskDataService } from '../../shared/services/task-data.service';
import { Task } from '../../shared/models/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() task: Task;
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];

  getTasks(): void {
    this.taskDataService.getTasks().subscribe(t => (this.tasks = t));
  }
  deleteTask(id: number): void {
    this.taskDataService.deleteTask(id).subscribe(t => this.getTasks());
  }

  constructor(private taskDataService: TaskDataService, private http: HttpClient) { }

  ngOnInit() {
    this.getTasks();
  }

  // onTaskViewed(url) {
  //   window.open(url);
  // }



}