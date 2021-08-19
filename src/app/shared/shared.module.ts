import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { CardListComponent } from './components/card-list/card-list.component';
import { AppAdsComponent } from './components/app-ads/app-ads.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppSearchBoxComponent } from './components/app-search-box/app-search-box.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,

    NgbModule,
    FontAwesomeModule
  ],
  declarations: [AppCardComponent, AppSearchBoxComponent , AppAdsComponent , CardListComponent ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,

    NgbModule,
    FontAwesomeModule,

    CardListComponent,
    AppCardComponent,
    AppSearchBoxComponent,
    AppAdsComponent
  ]
})
export class SharedModule {}