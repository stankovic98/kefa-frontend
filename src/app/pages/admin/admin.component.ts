import { Component, OnInit } from '@angular/core';
import {AdminService, Article} from '../../services/admin/admin.service';
import {AuthService} from '../../services/auth/auth.service';
declare var UIkit: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  info: any
  article = new Article()

  constructor(private admin: AdminService, private auth: AuthService) { }

  ngOnInit() {
    this.admin.getInfo().then(data => {
      this.info = data
    })
  }

  saveInfo() {
    this.admin.saveInfo(this.info).then(succes => {
      console.log(succes)
    }, err => {
      console.log(err)
    })
     UIkit.notification({
          message: 'Uspješno spremljena promjena!',
          status: 'primary',
          pos: 'top-center',
          timeout: 1000
      });
  }

  newArticle() {
    console.log(this.article)
    this.admin.newArticle(this.article).then(success => {
      console.log(success)
      UIkit.notification({
          message: 'Uspješno objavljen novi clanak!',
          status: 'primary',
          pos: 'top-center',
          timeout: 1000
      });
    })
  }

  logout() {
    this.auth.logout()
  }
}
