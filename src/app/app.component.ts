import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import './rxjs-operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  toggleNavBar: boolean;

  constructor(
    private router:Router
  ){
    this.toggleNavBar = false;
  }

  setNavClass(){
    return {
      "hide": false //this.toggleNavBar
    }
  }

  toggle_search_bar(){
    this.toggleNavBar = !this.toggleNavBar;
    this.router.navigate(['/search']);
  }
}
