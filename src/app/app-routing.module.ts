import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanuaryComponent } from './month/01_january/january.component';
import { FebuaryComponent } from './month/02_febuary/febuary.component';
import { MarchComponent } from './month/03_march/march.component';
import { AprilComponent } from './month/04_april/april.component';
import { MonthComponent } from './month/month.component';

const routes: Routes = [
  {path: '', component: MonthComponent},
  {path: 'month/january',component: JanuaryComponent },
  {path: 'month/febuary', component: FebuaryComponent },
  {path: 'month/march', component: MarchComponent },
  {path: 'month/april', component: AprilComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
 