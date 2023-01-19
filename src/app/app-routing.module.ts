import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanuaryComponent } from './january/january.component';
import { FebuaryComponent } from './febuary/febuary.component';

const routes: Routes = [
  { path: 'january-component', component: JanuaryComponent },
  { path: 'febuary-component', component: FebuaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
