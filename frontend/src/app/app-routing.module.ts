import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { SelectbusPageComponent } from './Components/selectbus-page/selectbus-page.component';
import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { ProfilePageComponent } from './Components/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'select-bus', component: SelectbusPageComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
