import { NgClass } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';
import { navLinksLabels } from '../../constants/navigation.const';
import { SidenavService } from '../../services/sidenav.service';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [RouterModule, NgClass],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.scss'
})
export class SidenavComponent extends BaseComponent implements OnInit {
	public navLinksLabels = navLinksLabels;

	public opened: boolean = false;

	constructor(private sidenavService: SidenavService) {
		super();
	}

	ngOnInit(): void {
		this.sidenavService.opened.subscribe(opened => {
			this.opened = opened;
		});
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
}
