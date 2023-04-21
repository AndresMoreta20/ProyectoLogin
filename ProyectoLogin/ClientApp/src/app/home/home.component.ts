/*import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
*/
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="text" name="username" [(ngModel)]="username" placeholder="Username">
      <input type="password" name="password" [(ngModel)]="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  `,
})
export class HomeComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    const body = { username: this.username, password: this.password };
    this.http.post('/api/auth/login', body).subscribe((response) => {
      console.log(response);
      // handle response here
    });
  }
}

