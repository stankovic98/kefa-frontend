import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-diocese',
  templateUrl: './diocese.component.html',
  styleUrls: ['./diocese.component.scss']
})
export class DioceseComponent implements OnInit {

  dioceseID: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dioceseID = this.route.snapshot.params["dioceseID"]
  }

}
