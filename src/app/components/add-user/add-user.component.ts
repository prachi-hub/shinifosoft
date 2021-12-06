import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  hide = true;

  constructor(private userService: UserDetailsService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      num: [''],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      cardNo: ['', [Validators.required]],
    })

    console.log(this.route.snapshot.params.id);
    var snapData = this.userService.getById(this.route.snapshot.params.id);
  }

  addUser(){
    this.userService.add(this.userForm.value);
    this.router.navigate(['/']);
  }

  

}
