import { Component, OnInit } from "@angular/core";
import { HomeService, Diocese } from "../../services/home.service";
declare var UIkit: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  dioceseID: string 
  parishID: string
  noDefaults = true
  dioceses: Diocese[]
  parishes: any[]
  constructor(private home: HomeService) {}

  ngOnInit() {
    try {
      this.dioceseID = this.home.getDefaultDiocese();
      this.parishID = this.home.getDefaultParish()
      this.noDefaults = false
    } catch (error) {
      this.noDefaults = true
    };
    this.home.getDioceses().then((data: Diocese[]) => {
      this.dioceses = data
    })
  }

  getParishes(dioceseID: string) {
    this.dioceseID = dioceseID
    this.home.setDefaultDiocese(dioceseID)
    this.home.getParishes(this.dioceseID).then(data => {
      this.parishes = data;
    })
  }

  setParish(parishID: string) {
    this.parishID = parishID
    this.home.setDefaultParish(parishID)
  }
}
