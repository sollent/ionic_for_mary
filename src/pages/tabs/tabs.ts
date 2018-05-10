import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { FilmsPage } from "../films/films";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmsPage;

  constructor() {

  }
}
