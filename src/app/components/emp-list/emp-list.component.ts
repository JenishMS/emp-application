import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/model/employer.model';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  employerList: Employer[] = [];
  _employerList: Employer[] = [];
  searchText = '';	
  page = 1;
  perPage = 2;
  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
    this.getEmployerList();
  }

  getEmployerList() {
    this.employerService.getEmployerList().subscribe((list: Employer[]) => {
      this._employerList = this.employerList = list;
    })
  }

  onSearch() {
    this.employerList = this._employerList.filter((employer: Employer) => {
      const checkName = employer.name.toLowerCase().includes(this.searchText.toLowerCase());
      const checkPhone = employer.mobile.toLowerCase().includes(this.searchText.toLowerCase());
      return checkName || checkPhone;
    })
  }

  pageChanged(page: number) {
    this.page = page;
  }
}
