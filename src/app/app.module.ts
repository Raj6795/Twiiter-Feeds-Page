import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterFeedsComponent } from './Components/twitter-feeds/twitter-feeds.component';

import { HttpClientModule } from '@angular/common/http';
import { TwitterHomeComponent } from './Components/twitter-home/twitter-home.component';

@NgModule({
  declarations: [AppComponent, TwitterFeedsComponent, TwitterHomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
