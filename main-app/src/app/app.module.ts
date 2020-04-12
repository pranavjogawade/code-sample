import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/covert-to-spaces.pipe';
import { StarComponentComponent } from './product-list/star-component/star-component.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductDetailGuard } from './product-detail/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
	ProductListComponent,
	ConvertToSpacesPipe,
	StarComponentComponent,
	ProductDetailComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	HttpClientModule,
	RouterModule.forRoot([
		{
			path: 'products',
			component: ProductListComponent
		},
		{
			path: 'products/:id',
			component: ProductDetailComponent,
			canActivate: [ProductDetailGuard]
		},
		{
			path: '',
			redirectTo: 'products',
			pathMatch: 'full'
		},
		{
			path: '**',
			redirectTo: 'products',
			pathMatch: 'full'
		}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
