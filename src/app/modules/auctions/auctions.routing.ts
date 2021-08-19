import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  AuctionsComponent } from './page/auctions.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'auctions',
    component:  AuctionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionsRoutingModule {}