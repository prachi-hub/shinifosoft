import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Details } from 'src/app/model/details';
import { UserDetailsService } from 'src/app/services/user-details.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userData: any = [];

  ELEMENT_DATA: Details[];

  displayedColumns: string[] = ['position', 'username', 'firstName', 'lastName', 'age', 'salary', 'card', 'action'];
  dataSource = new MatTableDataSource<Details>();

  constructor(private userService: UserDetailsService,) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    var data;
    data = this.userService.getAll();
    this.userData = this.dataSource.data = data as Details[];
    // console.log(this.userData)
  }

  delete(index: any) {
    var result = confirm('Are you Sure?');
    if(result) {
      this.userService.delete(index);
      this.userData= this.userService.getAll();
    }
  }

}
