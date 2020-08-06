import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { GarageOwnerComponent } from './components/garage-owner/garage-owner.component'; 
import { GarageLoginComponent } from './components/garage-login/garage-login.component'; 
import { GarageRegisterComponent } from './components/garage-register/garage-register.component'; 
import { AdminComponent } from './components/admin/admin.component';
import { AdvertDetailComponent } from './components/advert-detail/advert-detail.component';
import { MyGarageComponent } from './components/my-garage/my-garage.component';
import { AddAdvertComponent } from './components/add-advert/add-advert.component';

const routes: Routes = [
  { path: 'garageLogin', component: GarageLoginComponent },
  { path: 'garageOwner', component: GarageOwnerComponent },
  { path: 'garageRegister', component: GarageRegisterComponent },
  { path: 'clientView', component: ClientViewComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addAdvert', component: AddAdvertComponent },
  { path: 'myGarage/:id', component: MyGarageComponent },
  { path: 'garageOwner/:id', component: GarageOwnerComponent },
  { path: 'advertDetail/:id', component: AdvertDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
