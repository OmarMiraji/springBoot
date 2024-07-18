import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    });
  }

  signup() {
    if (this.signupForm.valid) {
      const { fullName, email, password, confirmPassword } = this.signupForm.value;
      
      // Validate passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      // Assuming you want to store the user in local storage
      let users = JSON.parse(localStorage.getItem('users') || '[]');

      // Check if user already exists
      if (users.find((u: { email: any; }) => u.email === email)) {
        alert("User already exists. Please login.");
        this.router.navigate(['login']);
        return;
      }

      // Add new user
      users.push({ fullName, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      
      // Optionally, you can clear the form or do any other operations
      this.signupForm.reset();

      // Inform user and redirect to login
      alert("Account created successfully. Please log in.");
      this.router.navigate(['login']);
    }
  }
}
