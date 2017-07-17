import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { requestOptionsProvider } from './default-request-options.service';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { HeroData } from "./hero-data";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(HeroData, {delay: 100})
  ],
  declarations: [
    AppComponent,
    ComicsComponent
  ],
  providers: [ requestOptionsProvider ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}



