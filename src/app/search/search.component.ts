import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('mySearch') mySearch: ElementRef;

  results: any[];
  likes:any;
  queryStream:Subject<string>;

  constructor(
    private router:Router,
    private renderer: Renderer,
    private searchService: SearchService
  ) {
    this.likes = {};
    this.queryStream = new Subject<string>();
  }

  ngOnInit() {

        this.queryStream
          .debounceTime(300)
          .distinctUntilChanged()
          .switchMap((query:string)=> this.searchService.searchQuery(query))
          .subscribe(results => {
            this.results = results;
            this.initialiseLikes();
          });
  }

  ngAfterViewInit(){
    this.renderer.invokeElementMethod(this.mySearch.nativeElement,
    'focus');
  }

  closeSearch(){
    this.router.navigate(['/lists']);
  }

  search(query:string){
    this.queryStream.next(query);
  }


  initialiseLikes(){
    this.results.forEach(deal => {
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
