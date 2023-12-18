import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsDataComponent } from './components/charts-data/charts-data.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    CardsComponent,
    ChartsDataComponent,
    ChartsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
