import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JanuaryComponent } from './january/january.component';
import { FebuaryComponent } from './febuary/febuary.component';
import { MarchComponent } from './march/march.component';

@NgModule({
  declarations: [
    AppComponent,
    JanuaryComponent,
    FebuaryComponent,
    MarchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
