import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartEnrollmentComponent } from './start-enrollment/start-enrollment.component';
import { VerifyIdentityComponent } from './verify-identity/verify-identity.component';

const routes: Routes = [
  {
    path: 'startEnrollment',
    component: StartEnrollmentComponent
  },
  {
    path: 'verifyIdentity',
    component: VerifyIdentityComponent
  },
  // {
  //   path: 'products/:id',
  //   component: ProductDetailComponent,
  //   canActivate: [ProductDetailGuard]
  // },
  {
    path: '',
    redirectTo: 'startEnrollment',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'startEnrollment',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
