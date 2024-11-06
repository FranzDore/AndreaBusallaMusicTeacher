import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { CurrentSectionService } from '../../services/current-section.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
	public paths = paths;
	public activeNavLink: string = paths.HOME;

	private sectionSub?: Subscription;

	constructor(private currentSectionService: CurrentSectionService) {}

	ngOnInit(): void {
		this.sectionSub = this.currentSectionService.activeSection$.subscribe(
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

	ngOnDestroy(): void {
		this.sectionSub?.unsubscribe();
	}
}
