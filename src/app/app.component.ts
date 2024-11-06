import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CurrentSectionService } from './shared/services/current-section.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, HomepageComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
	title = 'AndreaBusallaMusicTeacher';
	public currentSection: string = 'home';

	constructor(
		private currentSectionService: CurrentSectionService,
		private elementRef: ElementRef
	) {}

	ngAfterViewInit(): void {
		const sections = this.elementRef.nativeElement.querySelectorAll('.content-section');
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					console.warn(entry)
					if (entry.isIntersecting) {
						this.currentSectionService.setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.7 }
		);

		sections.forEach((section: HTMLElement) => observer.observe(section));
	}
}
