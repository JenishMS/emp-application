import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../model/country.model';
import { State } from '../model/state.model';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) {}

    getCountryList(state = null): Observable<Country[]> {
        let url = environment.api.master.getAllCountry;
        if(state) {
            url = environment.api.master.getCountryByState;
        }
        // return this.http.get(url);
        return of([{
            countryId: 1,
            countryName: 'India',
        },
        {
            countryId: 2,
            countryName: 'Pakistan',
        }]);
    }

    getStateList(country: number): Observable<State[]> {
        const  url = `${environment.api.master.getState}${country}`;
        // return this.http.get(url);
        return of([{
            stateId: 1,
            stateName: 'Tamil Nadu',
            countryId: 1,
        },
        {
            stateId: 2,
            countryId: 1,
            stateName: 'Kerala',
        },
        {
            stateId: 3,
            countryId: 1,
            stateName: 'Karnataka',
        }
    ]);
    }
}