import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class DataCube {
    id: number;
    size: number;
}

const DATACUBES: DataCube[] = [
    { id: 1, size: 1.5 },
    { id: 2, size: 1 },
    { id: 3, size: 1.2 }
]

@Injectable()
export class DataProviderService implements OnInit {
    private checkinData: string;

    constructor (private httpClient: HttpClient) {}

    get dataCubes() {
        return DATACUBES;
    }

    get checkin() {
        return this.checkinData;
    }

    ngOnInit(): void {
        this.httpClient.get(
            'https://data.idvp.net/api/query/checkin',
            {headers: new HttpHeaders().set('X-Tenant-Id', 'logus')}
            ).subscribe(p => this.checkinData = p['Guest']['Id']);
    }


}
