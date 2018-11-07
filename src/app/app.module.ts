import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ScrollToModule} from 'ng2-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
