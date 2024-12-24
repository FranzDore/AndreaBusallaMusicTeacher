import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { HomepageSharedComponent } from '../../shared/components/homepage-shared/homepage-shared.component';
import { NgClass } from '@angular/common';
import { CourseComponent } from '../../shared/components/course/course.component';
import { paths } from '../../app.routes';
import { CurrentSectionService } from '../../shared/services/current-section.service';
import { SidenavService } from '../../shared/services/sidenav.service';
import { AboutComponent } from '../../shared/components/about/about.component';
import { ContactsComponent } from '../../shared/components/contacts/contacts.component';
import { BaseComponent } from '../../shared/components/base-component/base-component.component';

@Component({
	selector: 'app-homepage',
	standalone: true,
	imports: [HomepageSharedComponent, AboutComponent, NgClass, ContactsComponent, CourseComponent],
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.css'
})
export class HomepageComponent extends BaseComponent implements OnInit, AfterViewInit {
	public currentSection: string = 'home';
	public opened: boolean = false;

	constructor(
		private currentSectionService: CurrentSectionService,
		private sidenavService: SidenavService,
		private elementRef: ElementRef
	) {
		super()
	}

	ngOnInit(): void {
		this.sidenavService.opened.subscribe(opened => (this.opened = opened));
	}

	ngAfterViewInit(): void {
		// this.initializeIntersectionObserver();
	}

	private initializeIntersectionObserver(): void {
		const sections = this.elementRef.nativeElement.querySelectorAll('.content-section');
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						this.currentSectionService.setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.9 }
		);

		sections.forEach((section: HTMLElement) => observer.observe(section));
	}
}
