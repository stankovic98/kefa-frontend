import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-latin-quote",
  templateUrl: "./latin-quote.component.html",
  styleUrls: ["./latin-quote.component.scss"]
})
export class LatinQuoteComponent implements OnInit {
  @Input() whiteBackground: boolean;

  constructor() {}

  ngOnInit() {}
}
