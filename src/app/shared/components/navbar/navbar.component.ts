import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { CurrentSectionService } from '../../services/current-section.service';
import { Subscription } from 'rxjs';
import { SidenavService } from '../../services/sidenav.service';
import { navLinks } from '../../constants/navigation.const';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
	public paths = paths;
	public navLinks = navLinks;

	public activeNavLink: string = paths.HOME;
	public showSidenav: boolean = false;

	private sectionSub?: Subscription;

	constructor(
		private currentSectionService: CurrentSectionService,
		private sidenavService: SidenavService
	) {}

	ngOnInit(): void {
		this.sectionSub = this.currentSectionService.activeSection$.subscribe(
			sectionId => (this.activeNavLink = sectionId)
		);
	}

	public scrollToSection(sectionId: string) {
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

	public toggleSidenav(): void {
		this.sidenavService.toggle();
	}

	ngOnDestroy(): void {
		this.sectionSub?.unsubscribe();
	}
}
