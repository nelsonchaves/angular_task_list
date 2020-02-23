import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { TaskListComponent } from './task-list/task-list.component';
import { ViewTaskComponent } from './task-list/components/view-task/view-task.component';

@NgModule({
  declarations: [CommonModule, HttpClientModule],
  imports: [TaskListComponent, ViewTaskComponent],
  exports: [TaskListComponent]
})
export class TaskListModule { }
