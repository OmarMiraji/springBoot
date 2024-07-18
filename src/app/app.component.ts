import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular + Spring Boot CRUD Full Stack';
  isLogin: boolean = true; // Initialize isLogin property
  userEmail: any;
  userPassword: any;
}
