import { NgClass } from '@angular/common';
import { Component, OnDestroy, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { navLinksLabels } from '../../constants/navigation.const';
import { SidenavService } from '../../services/sidenav.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [RouterModule, NgClass],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.scss'
})
export class SidenavComponent extends BaseComponent implements OnInit, OnDestroy {
	public navLinksLabels = navLinksLabels;

	public opened: boolean = false;
	public isThemeDark: boolean = false;

	private themeSubscription?: Subscription;

	constructor(
		private sidenavService: SidenavService,
		private themeService: ThemeService
	) {
		super();
	}

	ngOnInit(): void {
		this.sidenavService.opened.subscribe(opened => {
			this.opened = opened;
		});
		this.themeSubscription = this.themeService.themeObservable.subscribe({
			next: theme => (this.isThemeDark = theme === 'DARK')
		})
	}

	public toggleSidenav() {
		this.sidenavService.toggle();
	}

	public scrollToSection(sectionId: string) {
		sectionId === paths.HOME
			? scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			: document.getElementById(sectionId)?.scrollIntoView({
					block: 'center',
					behavior: 'smooth'
				});

		this.toggleSidenav();
	}

	ngOnDestroy(): void {
		this.themeSubscription?.unsubscribe();
	}
}
