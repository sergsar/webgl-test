import {Component, OnInit} from '@angular/core';
import {DataProviderService} from './data.provider.service';
import {HttpHeaders} from '@angular/common/http';

@Component({ selector: 'my-app', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
    private data: Object;

    constructor (private dataProviderService: DataProviderService) {} // TODO: delete after data providers completed, only needed for data tests

    ngOnInit() {
        let options = {headers: new HttpHeaders().set('X-Tenant-Id', 'logus')};
        let url = 'https://presentation.idvp.net/checkin/file/checkin.json';
        this.dataProviderService.getObservable(url, options).subscribe(p => this.data = p);
    }
}
