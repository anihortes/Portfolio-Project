import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanuaryComponent } from './january/january.component';
import { FebuaryComponent } from './febuary/febuary.component';
import { MarchComponent } from './march/march.component';

const routes: Routes = [
  {path: 'january',component: JanuaryComponent },
  {path: 'febuary', component: FebuaryComponent },
  {path: 'march', component: FebuaryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
