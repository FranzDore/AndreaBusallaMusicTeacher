import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { CurrentSectionService } from '../../services/current-section.service';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	public paths = paths;
	public activeNavLink: string = paths.HOME;

	constructor(private currentSectionService: CurrentSectionService) {}

	ngOnInit(): void {
		this.currentSectionService.activeSection$.subscribe(
			sectionId => (this.activeNavLink = sectionId)
		);
	}

	scrollToSection(sectionId: string) {
		document.getElementById(sectionId)?.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
	}

	public scrollToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
}
