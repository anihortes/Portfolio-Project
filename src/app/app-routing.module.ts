import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanuaryComponent } from './month/01_january/january.component';
import { FebuaryComponent } from './month/02_febuary/febuary.component';
import { MarchComponent } from './month/03_march/march.component';
import { AprilComponent } from './month/04_april/april.component';
import { MayComponent } from './month/05_may/may.component';
import { JuneComponent } from './month/06_june/june.component';
//import { JulyComponent } from './month/07_july/july.component';
//import { AugustComponent } from './month/08_august/august.component';
//import { SeptemberComponent } from './month/09_september/september.component';
//import { OctoberComponent } from './month/10_october/october.component';
//import { NovemberComponent } from './month/11_november/november.component';
//import { DecemberComponent } from './month/12_december/december.component';
import { MonthComponent } from './month/month.component';

const routes: Routes = [
  {path: '', component: MonthComponent},
  {path: 'month/january',component: JanuaryComponent },
  {path: 'month/febuary', component: FebuaryComponent },
  {path: 'month/march', component: MarchComponent },
  {path: 'month/april', component: AprilComponent },
  {path: 'month/may', component: MayComponent },
  {path: 'month/june', component: JuneComponent },
  //{path: 'month/june', component: JulyComponent },
  //{path: 'month/august', component: AugustComponent },
  //{path: 'month/september', component: SeptemberComponent },
  //{path: 'month/october', component: OctoberComponent },
  //{path: 'month/november', component: NovomberComponent },
  //{path: 'month/december', component: DecemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
 