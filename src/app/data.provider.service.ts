import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataProviderService {

    constructor (private httpClient: HttpClient) { }


    public getObservable<T>(url: string, options?: {}): Observable<T>;

    public getObservable(url: string, options?: {}): Observable<Object> {
        return this.httpClient.get(url, options);
    }

    // public subscribe(url: string, next?: (value: T) => void, options?: Map): void {
    //
    // }

    public getPromise<T>(url: string, options?: {}): Promise<T> {
        return this.getObservable<T>(url, options).toPromise<T>();
    }

    public async getAwait<T>(url: string, options?: {}) {
        let response: T;
        try {
            response = await this.getPromise<T>(url);
            console.log(response);
        } catch (e) {
            throw new Error(e);
        }
        return response;
    }
}
