import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component'

import { SendPaymentComponent } from './payment/send-payment/send-payment.component';
import { GetpaymentComponent } from './payment/getpayment/getpayment.component';
import { OtherComponent } from './payment/other/other.component';

const app_routes: Routes = [
  {
    path: '',
    redirectTo: '/payment',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'payment',
    children: [
      {
        path: '',
        redirectTo: '/send-payments',
        pathMatch: 'full'
      },
      {
        path: 'send-payments',
        component: SendPaymentComponent
      },
      {
        path: 'get-payments',
        component: GetpaymentComponent
      },
      {
        path: 'others',
        component: OtherComponent
      },

    ]
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot(app_routes)],
  declarations: [AppComponent, LoginComponent, SideNavComponent, SendPaymentComponent, GetpaymentComponent, OtherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
