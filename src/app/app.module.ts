import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatInputModule, 
  MatIconModule, 
  MatFormFieldModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoService } from './todos/todo.service';
import { TodoComponent } from './todos/todo.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,  
    HttpClientModule, 
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  declarations: [ AppComponent, TodoComponent],
  providers : [TodoService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
