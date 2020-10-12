import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwitterHomeComponent } from './Components/twitter-home/twitter-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TwitterHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
