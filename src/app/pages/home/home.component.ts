import { Component, OnInit } from "@angular/core";
import { HomeService, JurisdictionLevels } from "../../services/home.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  jurisdiction: any;
  posts: any = [
    { title: "Audijencija srijedom", author: "Papa Franjo" },
    {
      title: "Najbolji način pripreme za ovaj Uskrs",
      author: "Biskup Bože Radoš"
    },
    { title: "Audijencija srijedom", author: "Papa Franjo" },
    { title: "Audijencija srijedom", author: "Papa Franjo" },
    { title: "Audijencija srijedom", author: "Papa Franjo" }
  ];
  constructor(private home: HomeService) {}

  ngOnInit() {
    this.jurisdiction = JurisdictionLevels;
  }
}
