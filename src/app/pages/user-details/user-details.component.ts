import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html'
})


export class UserDetailsComponent implements OnInit {
 
 users: any=[];
   constructor(private http: HttpClient) {

   }
 
  
  ngOnInit() {
    //this.users = this.getAllUsers();
     this.getUsers();
  }

  // getAllUsers(){
  //  return this.http.get<any>('http://localhost:5000/users').map(data => {
  //           console.log(data);
  //           this.users = data.json();
  //           return data;
  //       });
  // }

  getUsers()
  {
    this.http.get(`http://localhost:5000/users`).pipe(map(res => res))
    .subscribe(
      data => {
        console.log(data);this.users = data
      },
      error => console.log(error)
    );
  }

   deleteUsers(user)
  {
    this.http.delete(`http://localhost:5000/users/`+user.id).pipe(map(res => res))
    .subscribe(
      data => {
        console.log("deleted user: "+user.name);
        alert("User deleted : "+user.name);
        this.getUsers();
      },
      error => console.log(error)
    );
  }
}
