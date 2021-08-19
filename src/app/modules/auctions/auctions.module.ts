import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionsComponent } from './page/auctions.component';
import { AuctionsRoutingModule } from './auctions.routing';


@NgModule({
  declarations: [AuctionsComponent],
  imports: [
    CommonModule,
    AuctionsRoutingModule
  ]
})
export class AuctionsModule { }