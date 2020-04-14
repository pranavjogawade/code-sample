import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartEnrollmentComponent } from './start-enrollment/start-enrollment.component';
import { VerifyIdentityComponent } from './verify-identity/verify-identity.component';

@NgModule({
  declarations: [
    AppComponent,
    StartEnrollmentComponent,
    VerifyIdentityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
