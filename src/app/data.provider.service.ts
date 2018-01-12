import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProviderService {

    constructor (private httpClient: HttpClient) { }


    public getObservable(datasetName: string): Observable<Object> {
        return         this.httpClient.get(
            'https://presentation.idvp.net/checkin/file/' + datasetName,
            {headers: new HttpHeaders().set('X-Tenant-Id', 'logus')}
        );
    }

    // public subscribe(url: string, next?: (value: T) => void, options?: Map): void {
    //
    // }

    public getPromise<T>(url: string, options?: {}): Promise<T> {
        return this.httpClient.get(url, options).toPromise<T>();
    }
}
