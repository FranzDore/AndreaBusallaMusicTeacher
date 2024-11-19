import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SidenavService {
	private opened$ = new BehaviorSubject<boolean>(false);
	public opened = this.opened$.asObservable();

	constructor() {}

	public toggle() {
		const currentValue = this.opened$.getValue();
		this.opened$.next(!currentValue);
	}
}
