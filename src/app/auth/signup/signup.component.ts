import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isMatching = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid Form');
      return;
    }
    if (form.value.password !== form.value.confirmPassword) {
      console.log('Password is not matching!');
      this.isMatching = false;
      return;
    }
    const fullName = form.value.firstName + ' ' + form.value.lastName;
    this.authService.userSignUp( {name: fullName, email: form.value.email, password: form.value.password} );
  }

}
