import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
  { path: '', component: ContentLayoutComponent ,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./modules/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'auctions',
        loadChildren: () =>
          import('./modules/auctions/auctions.module').then(m => m.AuctionsModule)
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./modules/groups/groups.module').then(m => m.GroupsModule)
      }
    ]
  },
  // { path: 'home' , component: ContentLayoutComponent },
  // { path: 'search' , component: ContentLayoutComponent },
  // { path: 'auctions' , component: ContentLayoutComponent },
  // { path: 'groups' , component: ContentLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
