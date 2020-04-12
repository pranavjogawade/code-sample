import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private productUrl = 'api/products/products.json';
	constructor(private http: HttpClient) {

	}
	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.productUrl).pipe(
			tap(data => console.log('A;;: ' + JSON.stringify(data))),
			catchError(this.handleError)
		);
	}

	private handleError(err: HttpErrorResponse) {
		let errorMessage = '';

		if(err.error instanceof ErrorEvent) {
			errorMessage = `An Error occured: ${err.error.message}`; ;
		} else {
			errorMessage = `Server retuened code: ${err.status}, error message is: ${err.message}`;
		}
		console.error(errorMessage);
		return throwError(errorMessage);
	}
}
