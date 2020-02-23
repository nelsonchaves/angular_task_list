import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './modules/task-list/task-list.component';
import { TaskAddComponent } from './modules/task-list/components/task-add/task-add.component';
import { NavComponent } from './modules/nav/nav.component';
import { TaskEditComponent } from './modules/task-list/components/task-edit/task-edit.component';
import { ViewTaskComponent } from './modules/task-list/components/view-task/view-task.component'


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    NavComponent,
    TaskEditComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
