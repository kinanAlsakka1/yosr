import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}