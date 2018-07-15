import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SleepComponent } from './sleep/sleep.component';
import { MeditateComponent } from './meditate/meditate.component';
import { MusicComponent } from './music/music.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'sleep',
    component: SleepComponent
  },
  {
    path: 'meditate',
    component: MeditateComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'master',
    component: MasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
