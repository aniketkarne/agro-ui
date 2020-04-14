import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})


export class UserComponent implements OnInit {
 
   constructor(private http: HttpClient) { }
  user = new User();
  ngOnInit() {}
  onSubmit() {
    console.log("name : "+this.user.name);
    console.log("district : "+this.user.district);
    console.log("tehsil : "+this.user.tehsil);
    console.log("village : "+this.user.village);
    console.log("farming_type : "+this.user.farming_type);
    console.log("contact_number : "+this.user.contact_number);
    console.log("crops : "+this.user.crops);
    console.log("farm_size : "+this.user.farm_size);
    console.log("email : "+this.user.email);
    console.log("password : "+this.user.password);
     
    this.createUser(this.user);
  
   
  }

  createUser(OBJCET: User){
   this.http.post<any>('http://localhost:5000/users', this.user).subscribe(data => {
            console.log("user"+data);
            alert("success");
        })
  }



//   createUserAnotherSample() {
//   let promise = new Promise((resolve, reject) => {
//     let apiURL = `http://localhost:5000/users`;
//     this.http.post(apiURL, this.user)
//       .toPromise()
//       .then(
//         res => { // Success
//           console.log(res);
//           resolve();
//         }
//       );
//   });
//   return promise;
// }
}
