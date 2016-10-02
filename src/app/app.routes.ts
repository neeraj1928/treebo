import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/lists',
    pathMatch: "full"
  },
  {
    path: "lists",
    component: ListsComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "**",
    component: ListsComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
