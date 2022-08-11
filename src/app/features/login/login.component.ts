import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit() {}
  onFormSubmit(form: NgForm) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    alert(JSON.stringify(form.value, null, 3));
  }
}
