import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ThreeRendererComponent } from './three-renderer.component';
import { ThreeSceneComponent } from './three-scene.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ThreeRendererComponent, ThreeSceneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
