import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string
  password: string

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.password)
    this.auth.login(this.email, this.password).toPromise().then(data => {
      console.log(data)
      this.router.navigate(['/admin'])
    })
  }
}
