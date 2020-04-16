import { Component, OnInit, Input } from "@angular/core";
import { JurisdictionLevels } from "../../services/home.service";

@Component({
  selector: "app-jurisdiction-level",
  templateUrl: "./jurisdiction-level.component.html",
  styleUrls: ["./jurisdiction-level.component.scss"]
})
export class JurisdictionLevelComponent implements OnInit {
  @Input() jurisdiction: JurisdictionLevels;
  title: string;
  subtitle: string;
  url: string;
  imageUrl: string;

  constructor() {}

  ngOnInit() {
    this.url = "#";
    switch (this.jurisdiction) {
      case JurisdictionLevels.pope:
        this.title = "Papa";
        this.subtitle = "Kristov Vikar";
        this.imageUrl = "/assets/st-gregory.jpg";
        break;
      case JurisdictionLevels.bishop:
        this.title = "Biskup";
        this.subtitle = "Nasljednik Dvanaestorice";
        this.imageUrl = "/assets/st-augustine.jpg";
        break;
      case JurisdictionLevels.priest:
        this.title = "Župnik";
        this.subtitle = "Božji Sluga";
        this.imageUrl = "/assets/Saint_Paul_of_the_Cross.jpg";
        this.url = "parish";
        break;
    }
  }
}
