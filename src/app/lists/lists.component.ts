import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ListsService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {

  deals:any[];
  likes:any;
  current_page: number;

  constructor(
    private listsService:ListsService
  ) {
    this.likes = {};
    this.current_page = 1;
  }

  ngOnInit() {
    this.loadPage();
  }

  paginationClass(position:number){
    if (position==this.current_page){
      return {
        "active": true,
        "waves-effect": false
      }
    } else {
      return {
        "active": false,
        "waves-effect": true
      }
    }
  }

  paginationClicked(pageNum){
    if(pageNum==-1){
      if (this.current_page>1){
        this.current_page -= 1;
      } else return;
    } else if (pageNum==-2){
      if (this.current_page<3){
        this.current_page += 1;
      } else return;
    } else {
      this.current_page = pageNum;
    }
    this.loadPage();
  }

  loadPage(){
    this.listsService.getHotels(this.current_page.toString())
      .subscribe(deals => {
        this.deals = deals;
        this.initialiseLikes();
    });
  }

  initialiseLikes(){
    this.deals.forEach(deal => {
      if (!localStorage.getItem(deal[0])){
        localStorage.setItem(deal[0], "0");
        this.likes[deal[0]] = "0";
      } else{
        this.likes[deal[0]] = localStorage.getItem(deal[0]);
      }
    });
  }

  thumbClicked(uid){
    this.likes[uid] = (parseInt(this.likes[uid]) + 1).toString();
    localStorage.setItem(uid, this.likes[uid]);
  }


}
