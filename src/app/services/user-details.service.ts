import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
data: any;
  constructor() { }

  add(title: string) {
    if (localStorage.getItem('todolist') == null) {
      let list: string[] = [];
      list.push(title + 1);
      localStorage.setItem('todolist', JSON.stringify(list));
      // return list.length + 1;
    } else {
      let returnUrl: any = localStorage.getItem('todolist');
      let list: string[] = JSON.parse(returnUrl);
      list.push(title);
      localStorage.setItem('todolist', JSON.stringify(list));
    }
  }

  getAll() {
    let returnUrl: any = localStorage.getItem('todolist');
    
    if (returnUrl != null) {
      // console.log(JSON.parse(returnUrl))
      return JSON.parse(returnUrl);
    }
    return null;
  }


  delete(index: any) {
    let returnUrl: any = localStorage.getItem('todolist');
    let list: string[] = JSON.parse(returnUrl);
    list.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(list));
  }
}
