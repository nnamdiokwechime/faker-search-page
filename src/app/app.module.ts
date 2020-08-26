import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsComponent } from './search-page/search-results/search-results.component';
import { SearchDetailComponent } from './search-page/search-detail/search-detail.component';
import { SearchResultComponent } from './search-page/search-results/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
