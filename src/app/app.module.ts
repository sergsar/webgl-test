import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ThreeBasisModule} from './three-basis/three-basis.module';
import {DataProviderService} from './data.provider.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, ThreeBasisModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DataProviderService ] // TODO: delete, only needed for dataprov tests
})
export class AppModule { }
