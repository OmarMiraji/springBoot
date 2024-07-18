import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;
  users: { email: string, password: string }[] = []; // Store registered users here

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      Email: ["", Validators.required],
      Password: ["", Validators.required],
    });

    // Initialize users list (can be loaded from backend or local storage)
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  login() {
    if (this.loginForm.valid) {
      const { Email, Password } = this.loginForm.value;
      
      // Check if the user exists in the registered users list
      const user = this.users.find(u => u.email === Email && u.password === Password);
      
      if (user) {
        // Redirect to main layout upon successful login
        this.router.navigate(['/home']);
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Please enter valid email and password.");
    }
  }
}
