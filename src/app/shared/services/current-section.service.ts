import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CurrentSectionService {
	private activeSection = new Subject<string>();

	activeSection$ = this.activeSection.asObservable();

	setActiveSection(sectionId: string) {
		this.activeSection.next(sectionId);
	}
}
