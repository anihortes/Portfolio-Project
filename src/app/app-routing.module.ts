import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanuaryComponent } from './month/january/january.component';
import { FebuaryComponent } from './month/febuary/febuary.component';
import { MarchComponent } from './month/march/march.component';

const routes: Routes = [
  {path: 'month/january',component: JanuaryComponent },
  {path: 'month/febuary', component: FebuaryComponent },
  {path: 'month/march', component: MarchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
