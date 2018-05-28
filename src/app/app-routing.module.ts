import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import services
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

// import components
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { BitCoinHistoryComponent } from './bit-coin-history/bit-coin-history.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'bitcoin-history',
        component: BitCoinHistoryComponent
      }
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
