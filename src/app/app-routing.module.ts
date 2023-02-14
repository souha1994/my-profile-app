import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfantComponent } from './enfant/enfant.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'enfant', component: EnfantComponent},
  { path: 'profile', component: ProfileComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
