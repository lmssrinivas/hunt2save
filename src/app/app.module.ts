import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { TilesComponent } from './tiles/tiles.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
