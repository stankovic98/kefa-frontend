import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-parish",
  templateUrl: "./parish.component.html",
  styleUrls: ["./parish.component.scss"],
})
export class ParishComponent implements OnInit {
  posts: any = [
    { title: "Audijencija srijedom", author: "Papa Franjo" },
    {
      title: "Najbolji način pripreme za ovaj Uskrs",
      author: "Biskup Bože Radoš",
    },
    { title: "Audijencija srijedom", author: "Papa Franjo" },
    { title: "Audijencija srijedom", author: "Papa Franjo" },
    { title: "Audijencija srijedom", author: "Papa Franjo" },
  ];
  constructor() {}

  ngOnInit() {}
}
