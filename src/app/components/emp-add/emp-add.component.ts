import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/model/country.model';
import { Employer } from 'src/app/model/employer.model';
import { State } from 'src/app/model/state.model';
import { AppService } from 'src/app/services/app.service';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent implements OnInit {
  empForm!: FormGroup;
  todayDate = new Date().toISOString().split("T")[0];
  countryList: Country[] = [];
  stateList: State[] = [];
  isSubmitted = false;


  constructor(private fb: FormBuilder, private appService: AppService, private employerService: EmployerService, private route: ActivatedRoute) { 
    this.createForm();

    const employerId = this.route.snapshot.params['id'];
    if(employerId) {
      this.getEmployerById(employerId);
    }
  }

  ngOnInit(): void {
    this.getCountryList();
  }

  getEmployerById(empId: number) {
    this.employerService.getEmployer(empId).subscribe((emp: Employer) => {
      this.getState(emp.country);
      this.empForm.patchValue(emp);
    });
  }


  createForm() {
    this.empForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      age: this.fb.control('', [Validators.required, Validators.maxLength(3), Validators.maxLength(3)]),
      mobile: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{6,11}$/)]),
      dob: this.fb.control('', [Validators.required]),
      address1: this.fb.control('', [Validators.required]),
      address2: this.fb.control(''),
      pincode: this.fb.control('', [Validators.required,Validators.minLength(6), Validators.maxLength(6)]),
      country: this.fb.control('', [Validators.required]),
      state: this.fb.control('', [Validators.required]),
    });
  }

  getCountryList(state = null) {
    this.appService.getCountryList(state).subscribe((countries: Country[]) => {
      this.countryList = countries;
    });
  }
  
  getState(countryId: number) {
    this.appService.getStateList(countryId).subscribe((state: State[]) => {
      this.stateList = state;
    });
  }

  onChangeCountry() {
    const countryId = this.empForm.value.country;
    this.getState(countryId);
  }

  submitForm() {
    this.isSubmitted = true;
    if(this.empForm.valid) {
      this.employerService.addEmployer(this.empForm.value).subscribe((response) => {});
    }
    console.log(this.empForm.value);
  }
}
