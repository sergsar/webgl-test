import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ThreeBasisModule} from './three-basis/three-basis.module';

@NgModule({
  imports:      [ BrowserModule, ThreeBasisModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
