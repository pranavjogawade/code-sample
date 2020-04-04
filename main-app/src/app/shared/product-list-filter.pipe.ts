import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'productFilter'
})

export class ProductListFilterPipe implements PipeTransform {
	transform(value: string, character: string): string {
		return
	}
}
