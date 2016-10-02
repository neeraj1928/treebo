import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  providers: [StatsService]
})
export class StatsComponent implements OnInit {

  stats:any;

  constructor(
    private statsService: StatsService
  ) {

  }

  ngOnInit() {
    this.statsService.getStats()
      .subscribe(stats => {
        this.stats = stats;
      });
    //*/
  }

}
