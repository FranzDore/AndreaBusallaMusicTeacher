import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { CurrentSectionService } from '../../services/current-section.service';
import { Subscription } from 'rxjs';
import { SidenavService } from '../../services/sidenav.service';
import { navLinksLabels } from '../../constants/navigation.const';
import { BaseComponent } from '../base-component/base-component.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule, NgClass],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent extends BaseComponent implements OnInit, OnDestroy {
	public navLinksLabels = navLinksLabels;

	public activeNavLink: string = paths.HOME;
	public showSidenav: boolean = false;
	public isThemeDark: boolean = false;

	private sectionSub?: Subscription;

	constructor(
		private currentSectionService: CurrentSectionService,
		private sidenavService: SidenavService,
		private themeService: ThemeService
	) {
		super()
	}

	ngOnInit(): void {
		this.sectionSub = this.currentSectionService.activeSection$.subscribe(
			sectionId => (this.activeNavLink = sectionId)
		);
		this.themeService.themeObservable.subscribe({
			next: theme => (this.isThemeDark = theme === 'DARK')
		})
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

	public toggleTheme(): void {
		this.themeService.toggleTheme();
	}

	ngOnDestroy(): void {
		this.sectionSub?.unsubscribe();
	}
}
