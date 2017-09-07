import { Component, AfterViewInit } from '@angular/core';
@Component({
	selector: 'ea-starter',
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	title:string;
	subtitle:string;	
	constructor() {
		this.title = "Sto.Antonio";
		this.subtitle = "Sistema de gestão da quermece"
	}

	ngAfterViewInit(){}
}