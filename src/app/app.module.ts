import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule}       from '@angular/router';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { routes } from './app.routing';

import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { TilesComponent } from './tiles/tiles.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DealsComponent } from './deals/deals.component';
import { StoresComponent } from './stores/stores.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    TilesComponent,
    DealsComponent,
    StoresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
