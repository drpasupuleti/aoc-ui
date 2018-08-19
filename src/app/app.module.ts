import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculateAOCService } from './calculate-aoc/calculate-aoc-service';
import { CalculateAocComponent } from './calculate-aoc/calculate-aoc.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculateAocComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CalculateAOCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
