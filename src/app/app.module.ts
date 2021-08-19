import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule} from './shared/shared.module';

import { FooterComponent } from './layouts/footer/footer.component';
import { GetAppComponent } from './layouts/get-app/get-app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HeroComponent } from './layouts/hero/hero.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GetAppComponent,
    HeaderComponent,
    HeroComponent,
    ContentLayoutComponent,
    NavComponent
  ],
  imports: [
     // angular
    BrowserModule,
    BrowserAnimationsModule,

    // app
    AppRoutingModule,

    // core & shared
    CoreModule,
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
