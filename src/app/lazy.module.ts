import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'load-me', component: LazyParentComponent}
];

@NgModule({
  declarations: [LazyParentComponent, LazyChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
