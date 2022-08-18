import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
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
  constructor(private authService: AuthService,private router: Router, private userStoreService:  UserStoreService) {
  }


  ngOnInit() {}
  onFormSubmit(form: NgForm) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.authService.login(form.value.email, form.value.password).subscribe(
      () => this.router.navigate(['/courses']),
    );
    this.userStoreService.getUser()

    this.authService.isAuthorized$.subscribe(result => {
      if (result) {
        alert('Successfully logged in');
      }
    })
  }
}
