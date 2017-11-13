import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DataProviderService implements OnInit {

    constructor (private httpClient: HttpClient) { }

    get lastName() {
        return         this.httpClient.get(
            'https://data.idvp.net/api/query/checkin2',
            {headers: new HttpHeaders().set('X-Tenant-Id', 'logus')}
        ).subscribe()['Guest']['LastName'];
    }

    ngOnInit(): void {

    }


}
