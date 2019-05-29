import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BmMoreButtonComponent } from './bm-more-button/bm-more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BmMoreButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
