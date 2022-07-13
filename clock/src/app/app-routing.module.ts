import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'clock', 
    loadChildren: () => import('./clock/clock.module')
    .then(m => m.ClockModule)
  },
  { path: '**', redirectTo: 'clock', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
