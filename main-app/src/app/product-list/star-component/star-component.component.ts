import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.scss']
})
export class StarComponentComponent implements OnInit, OnChanges {
	@Input() rating:number;
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();
	starWidth: number;
	constructor() {

	}


	ngOnChanges(): void {
		this.starWidth = this.rating * 74/5;
	}
	ngOnInit() {
		console.log(this.rating);
	}

	onClick() {
		this.notify.emit('The rating ' + this.rating + ' clicked');
	}

}
