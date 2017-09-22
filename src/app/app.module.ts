import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ThreeCanvasComponent } from './three-canvas.component';
import { ThreeSceneComponent } from './three-scene.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ThreeCanvasComponent, ThreeSceneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
