import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateFacade } from 'src/app/auth/store/auth.facade';
import { UserStoreService } from 'src/app/user/services/user-store.service';
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
  constructor(private authStateFacade: AuthStateFacade) {}

  ngOnInit() {}
  onFormSubmit(form: NgForm) {
    this.authStateFacade.login(form.value);
  }
}
