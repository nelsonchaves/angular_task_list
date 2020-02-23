import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../shared/models/task';
import { TaskDataService } from 'src/app/services/task-data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  @Input() task: Task;
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];
  detailsTask: Task = new Task();

saveTask(){
  this.taskDataService
  .editTask(this.detailsTask)
  .subscribe(t => this.router.navigate(["list"]));
}
getTasks(): void {
  this.taskDataService.getTasks().subscribe(t => (this.tasks = t));
}
deleteTask(id: number): void {
  this.taskDataService.deleteTask(id).subscribe(t => this.router.navigate(["list"]));
}

  constructor(
    private taskDataService: TaskDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.taskDataService
        .getTask(+param["id"])
        .subscribe(t => (this.detailsTask = t));
    });
  }

}