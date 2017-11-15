import {Component, OnInit} from '@angular/core';
import {DataProviderService} from './data.provider.service';

@Component({ selector: 'my-app', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
    private lastName: string;

    constructor (private dataProviderService: DataProviderService) {} // TODO: delete, only needed for dataprov tests

    ngOnInit() {
        this.dataProviderService.getObservable('checkin2').subscribe(p => this.lastName = p['Guest']['LastName']);
    }
}
