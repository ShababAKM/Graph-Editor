import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    InspectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
