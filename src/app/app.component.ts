import {Component } from '@angular/core';
import {DataProviderService} from './data.provider.service';

@Component({ selector: 'my-app', templateUrl: './app.component.html' })
export class AppComponent {
    constructor (private dataProviderService: DataProviderService) {} // TODO: delete, only needed for dataprov tests
}
