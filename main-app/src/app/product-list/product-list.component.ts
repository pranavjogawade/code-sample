import { Component, OnInit } from '@angular/core';
import { Product } from './product.model'
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	products: Product[];
	filteredProducts: Product[];
	showImage: boolean = false;

	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}
	constructor() {
		this.products = [
			{
				productId: 2,
				productName: 'Garden Cart',
				productCode: 'DFD-234',
				releaseDate: 'March 18, 2020',
				description: 'Test Description of product',
				price: 54.52,
				starRating: 4.2,
				imageUrl: 'assets/images/garden.jpeg'
			},
			{
				productId: 3,
				productName: 'Hammer Cart',
				productCode: 'HAM-234',
				releaseDate: 'Feb 18, 2020',
				description: 'Test Description of product',
				price: 65.552,
				starRating: 3.2,
				imageUrl: 'assets/images/hammer.jpeg'
			}
		];
		this.filteredProducts = this.products;
		this.listFilter = 'cart';
	}
	toggleImage(): void {
		this.showImage = !this.showImage;
	}
	performFilter(filterBy: string): Product[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: Product)=>
		product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}
	ngOnInit() {
}

}
