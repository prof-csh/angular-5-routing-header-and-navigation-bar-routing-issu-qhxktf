import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
	blankUrl = '';
	currentUrl: string;
	checkoutUrls = ['/login'];
	constructor(private router: Router) {
		router.events.filter(e => e instanceof NavigationEnd)
			.subscribe((e: NavigationEnd) => {
				this.currentUrl = e.url;
				setTimeout(callback => {
					window.scrollTo(0, 0);
				}, 100)
			});
		
	}
	isCheckoutRoute() {
		if (!this.currentUrl) {
			return false;
		}
		const index = this.checkoutUrls.indexOf(this.currentUrl);
		if (index >= 0) {
			return true;
		} else {
			return false;
		}
	}
}
