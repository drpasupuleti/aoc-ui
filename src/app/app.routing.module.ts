import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculateAocComponent } from './calculate-aoc/calculate-aoc.component';

const routes: Routes = [
  { path: 'calculate-aoc', component: CalculateAocComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
