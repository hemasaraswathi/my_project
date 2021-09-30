import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './components/myfirstcomponent/myfirstcomponent.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { SudentService } from './sudent.service';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    DatabindingComponent,
    ChildComponent,
    StudentComponent,
    StudentdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
        ],
  providers:[SudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
