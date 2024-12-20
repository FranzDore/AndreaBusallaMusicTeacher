import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { paths } from './app.routes';
import { AboutComponent } from './shared/components/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { CurrentSectionService } from './shared/services/current-section.service';
import { SidenavService } from './shared/services/sidenav.service';
import { NgClass } from '@angular/common';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { CourseComponent } from './shared/components/course/course.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		NavbarComponent,
		HomepageComponent,
		AboutComponent,
		SidenavComponent,
		NgClass,
		ContactsComponent,
		CourseComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
	public paths = paths;
	public currentSection: string = 'home';
	public opened: boolean = false;

	constructor(
		private currentSectionService: CurrentSectionService,
		private sidenavService: SidenavService,
		private elementRef: ElementRef
	) {}

	ngOnInit(): void {
		this.sidenavService.opened.subscribe(opened => (this.opened = opened));
	}

	ngAfterViewInit(): void {
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
