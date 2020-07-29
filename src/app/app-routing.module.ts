import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: 'clientView', component: ClientViewComponent },
  { path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
