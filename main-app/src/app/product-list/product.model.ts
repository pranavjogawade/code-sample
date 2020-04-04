// export class Product{
// 	constructor(
// 		public productId: number,
// 		public productName: string,
// 		public productCode: string,
// 		public releaseDate: string,
// 		public description: string,
// 		public price: number,
// 		public starRating: number,
// 		public imageUrl: string){

// 	}
// }

export interface Product {
	productId: number;
	productName: string;
	productCode: string;
	releaseDate: string;
	description: string;
	price: number;
	starRating: number;
	imageUrl: string;
	//calculateDiscount(percent: number): number;
}
