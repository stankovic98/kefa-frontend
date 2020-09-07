import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: "app-parish",
  templateUrl: "./parish.component.html",
  styleUrls: ["./parish.component.scss"],
})
export class ParishComponent implements OnInit {

  apiEndpoint = "http://localhost:4200/api"
  parishData: any

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.apiEndpoint += this.router.url
    console.log(this.router.url)
    this.http.get(this.apiEndpoint).toPromise().then(data => {
      this.parishData = data
      console.log(this.parishData)
    })
  }
}
