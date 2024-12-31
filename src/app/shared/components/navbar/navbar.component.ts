import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { navLinksLabels } from '../../constants/navigation.const';
import { SidenavService } from '../../services/sidenav.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { ThemeButtonToggleComponent } from '../theme-button-toggle/theme-button-toggle.component';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule, NgClass, ThemeButtonToggleComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent extends BaseComponent {
	public navLinksLabels = navLinksLabels;

	public activeNavLink: string = paths.HOME;
	public showSidenav: boolean = false;
	public isThemeDark: boolean = false;

	constructor(private sidenavService: SidenavService) {
		super();
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
}
