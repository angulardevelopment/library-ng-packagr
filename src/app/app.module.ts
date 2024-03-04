import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatCodeModule } from 'projects/format-code/src/public-api';
import { ToastModule } from 'projects/toast/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormatCodeModule,
    ToastModule.forRoot({ apiKey: 'shhhhh' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
