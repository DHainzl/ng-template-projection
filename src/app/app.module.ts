import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BmMoreButtonComponent } from './bm-more-button/bm-more-button.component';
import { BmMoreContainerDirective } from './bm-more-button/bm-more-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    BmMoreButtonComponent,
    BmMoreContainerDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
