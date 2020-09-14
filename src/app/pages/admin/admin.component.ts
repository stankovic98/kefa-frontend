import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin/admin.service';
declare var UIkit: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  info: any

  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.admin.getInfo().then(data => {
      this.info = data
    })
  }

  saveInfo() {
    this.admin.saveInfo(this.info).then(succes => {
      UIkit.notification({
          message: 'Uspješno spremljena promjena!',
          status: 'primary',
          pos: 'top-center',
          timeout: 5000
      });
    })
  }
}
