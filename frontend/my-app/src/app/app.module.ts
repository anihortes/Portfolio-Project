import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JanuaryComponent } from './month/01_january/january.component';
import { FebuaryComponent } from './month/02_febuary/febuary.component';
import { MarchComponent } from './month/03_march/march.component';
import { MonthComponent } from './month/month.component';
import { AprilComponent } from './month/04_april/april.component';
import { MayComponent } from './month/05_may/may.component';
import { JuneComponent } from './month/06_june/june.component';

@NgModule({
  declarations: [
    AppComponent,
    JanuaryComponent,
    FebuaryComponent,
    MarchComponent,
    MonthComponent,
    AprilComponent,
    MayComponent,
    JuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
