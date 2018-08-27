import { Component, OnInit } from '@angular/core';
import { Navitems } from "../../models/navitems"
import { navigationCancelingError } from '@angular/router/src/shared';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuTopics: Navitems[];
  constructor(
  ) { }
  ngOnInit() {
    this.menuTopics = [
      new Navitems(1, "Java"),
      new Navitems(2, "DevOps"),
      new Navitems(3, "Database")
    ]





  }

}
