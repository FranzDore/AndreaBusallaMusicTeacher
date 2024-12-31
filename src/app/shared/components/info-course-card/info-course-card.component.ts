import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-info-course-card',
	standalone: true,
	imports: [NgClass, NgStyle],
	templateUrl: './info-course-card.component.html',
	styleUrl: './info-course-card.component.css',
	animations: [
		trigger('slideDown', [
			transition(':enter', [
				style({ transform: 'translateY(-10px)', opacity: 0 }),
				animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
			]),
			transition(':leave', [
				animate('300ms ease-in', style({ transform: 'translateY(-10px)', opacity: 0 }))
			])
		])
	]
})
export class InfoCourseCardComponent {
	@Input() headerTitle?: string;
	@Input() difficulty?: string;
	@Input() bodyDesc?: string;
	@Input() chapters?: string[];
	@Input() cardColor?: 'PRIMARY' | 'SECONDARY' = 'PRIMARY'

	public menuOpen: boolean = false;

	toggleMenu(): void {
		this.menuOpen = !this.menuOpen;
	}
}
