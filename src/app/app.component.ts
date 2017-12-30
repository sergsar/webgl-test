import {Component, OnInit} from '@angular/core';
import {DataProviderService} from './data.provider.service';

@Component({ selector: 'my-app', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
    private data: Object;

    constructor (private dataProviderService: DataProviderService) {} // TODO: delete, only needed for data tests

    ngOnInit() {
        this.dataProviderService.getObservable('nurseDictionaries').subscribe(p => this.data = p);
    }
}
