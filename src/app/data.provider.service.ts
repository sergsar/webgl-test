import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataProviderService {

    constructor (private httpClient: HttpClient) { }


    public getObservable(datasetName: string): Observable<Object> {
        return         this.httpClient.get(
            'https://data.idvp.net/api/query/' + datasetName,
            {headers: new HttpHeaders().set('X-Tenant-Id', 'logus')}
        );
    }


}
