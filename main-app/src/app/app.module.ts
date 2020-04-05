import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/covert-to-spaces.pipe';
import { StarComponentComponent } from './product-list/star-component/star-component.component'
@NgModule({
  declarations: [
    AppComponent,
	ProductListComponent,
	ConvertToSpacesPipe,
	StarComponentComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
