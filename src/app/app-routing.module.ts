import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', 
  pathMatch: 'full',
  loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule),
  // canActivate: [OrgGuard],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
