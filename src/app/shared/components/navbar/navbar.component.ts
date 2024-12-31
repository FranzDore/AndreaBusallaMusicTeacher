import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { navLinksLabels } from '../../constants/navigation.const';
import { SidenavService } from '../../services/sidenav.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { ThemeButtonToggleComponent } from '../theme-button-toggle/theme-button-toggle.component';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule, NgClass, ThemeButtonToggleComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent extends BaseComponent implements OnInit, OnDestroy {
	public navLinksLabels = navLinksLabels;

	public activeNavLink: string = paths.HOME;
	public showSidenav: boolean = false;
	public isThemeDark: boolean = false;

	private themeSubscription?: Subscription;

	constructor(
		private sidenavService: SidenavService,
		private themeService: ThemeService
	) {
		super();
	}

	ngOnInit(): void {
		this.themeSubscription = this.themeService.themeObservable.subscribe({
			next: (theme) => {
				this.isThemeDark = theme === 'DARK';
			}
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

	ngOnDestroy(): void {
		this.themeSubscription?.unsubscribe();
	}
}
