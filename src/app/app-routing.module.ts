import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './modules/task-list/task-list.component';
import { TaskAddComponent } from './modules/task-list/components/task-add/task-add.component';
import { TaskEditComponent} from './modules/task-list/components/task-edit/task-edit.component';
import { ViewTaskComponent } from './modules/task-list/components/view-task/view-task.component';


const routes: Routes = [
{ path: "", redirectTo: "list", pathMatch: "full" },
{ path: "list", component: TaskListComponent },
{ path: "add", component: TaskAddComponent },
{ path: "edit/:id", component: TaskEditComponent },
{ path: "details/:id", component: ViewTaskComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
