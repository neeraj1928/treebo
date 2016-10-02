import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { SearchComponent } from './search/search.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    SearchComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterializeModule,

    routing
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
