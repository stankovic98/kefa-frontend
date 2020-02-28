import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-gospel',
  templateUrl: './gospel.component.html',
  styleUrls: ['./gospel.component.scss']
})
export class GospelComponent implements OnInit {

  gospel: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.gospel = this.homeService.getTodaysGospel();
  }

}
