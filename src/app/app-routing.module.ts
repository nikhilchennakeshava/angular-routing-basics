import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './admin.guard';
import { PreloadGuard } from './preload.guard';

const routes: Routes = [
  {path: 'lazy', loadChildren: './lazy.module#LazyModule'},
  {path: '', component: HomeComponent},
  {
    path: 'animals',
    component: AnimalsComponent,
    // canActivate: [AdminGuard],
    children: [
      {path: ':name', component: AnimalDetailsComponent, resolve: [PreloadGuard]}
    ]
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
