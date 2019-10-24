import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListModule, BorderModule } from 'projects/shared-lib/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ListModule, BorderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
