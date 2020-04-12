import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
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
	errorMessage: string = '';
	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}
	constructor(private productService: ProductService) {
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
		this.productService.getProducts().subscribe({
			next: products => {
				this.products = products;
				this.filteredProducts = this.products},
			error: err => this.errorMessage = err
		});

	}
	onNotify(message: string): void {
		this.pageTitle = 'Product List' + message;
	}

}
