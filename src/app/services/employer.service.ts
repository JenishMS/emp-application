import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employer } from '../model/employer.model';

@Injectable({
    providedIn: 'root'
})
export class EmployerService {
     list: Employer[] = [
            {
  employerId: 1,
      name: 'Jenish',
      age: 26,
      mobile: '9874563211',
      dob: '1997-04-01',
      address1: 'Kanyakumari',
      address2: 'Thuckalay',
      pincode: 123456,
      country: 1,
      state: 1
    },
            {
  employerId: 2,
      name: 'Hakash',
      age: 26,
      mobile: '9786453112',
      dob: '1996-07-01',
      address1: 'Chennai',
      address2: 'Vandalur',
      pincode: 123456,
      country: 1,
      state: 1
    },
    {
  employerId: 3,
      name: 'Nivedha',
      age: 26,
      mobile: '9786453112',
      dob: '1996-07-01',
      address1: 'Chennai',
      address2: 'Vandalur',
      pincode: 123456,
      country: 1,
      state: 1
    },
            {
  employerId: 4,
      name: 'Vignesh',
      age: 26,
      mobile: '8435963211',
      dob: '1997-04-01',
      address1: 'Chennai',
      address2: 'Aathampakkam',
      pincode: 123456,
      country: 1,
      state: 1
    }
        ];

    constructor(private http: HttpClient) {}

    addEmployer(data: any): Observable<any> {
        return this.http.post(environment.api.employer.addEmployer, data);
        return of(true);
    }
    
    updateEmployer(empId: number): Observable<any> {
        // return this.http.put(environment.api.employer.addEmployer, data);
        return of(true);
    }

    getEmployerList(): Observable<Employer[]> {
        // return this.http.get(environment.api.employer.getEmployerList);
        return of(this.list);
    }

    getEmployer(empId: number) {
        // return this.http.get(environment.api.employer.getEmployer + empId);
        return of(this.list[empId-1]);
    }
}