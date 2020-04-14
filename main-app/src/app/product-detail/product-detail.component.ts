import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	product: Product;
  constructor(private router: Router, private route: ActivatedRoute) {
	  console.log(this.route.snapshot.paramMap.get('id'))
  }
  onBack(): void {
	  this.router.navigate(['/products']);
  }
  ngOnInit() {
	  let id = +this.route.snapshot.paramMap.get('id');
	  this.pageTitle += ' ' + id;
	  this.product = {
		"productId": 2,
		"productName": "Garden Carts",
		"productCode": "DFD-234",
		"releaseDate": "March 18, 2020",
		"description": "Test Description of product",
		"price": 54.52,
		"starRating": 4.2,
		"imageUrl": "assets/images/garden.jpeg"
	};
  }

}
