import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/model/details';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userObj: Details;
  hide = true;

  userForm: FormGroup;

  currentUser: any = [];


  constructor(private route: ActivatedRoute,private userService: UserDetailsService,) { 
    this.userObj = new Details();
    
    this.route.params.subscribe((res: any) => {
      this.userObj.num = res;
    })
  }

  ngOnInit(): void {
    const record = localStorage.getItem('todolist');
    // debugger
    if(record !== null){
      const userList = JSON.parse(record);
      console.log(userList)
      this.currentUser = userList.find((m: any) => {
        if(m.num == this.route.snapshot.params.id){
          return m;
        }
      });
    }
  }

  getNewData(){
    
    const oldRecord = localStorage.getItem('todolist');
    if(oldRecord !== null){
      const userList = JSON.parse(oldRecord);
      return userList.length + 1;
    } else {
      return 1;
    }
  }

  updateUser(){
    // console.log(this.currentUser)
    this.userService.add(this.currentUser);

    this.currentUser.reset();
  }

}
