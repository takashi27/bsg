import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
