import { Component, type OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [RouterModule, NgClass],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
	public opened: boolean = false;

	constructor(
		private readonly router: Router,
		private sidenavService: SidenavService
	) {}

	ngOnInit(): void {
		this.sidenavService.opened.subscribe(opened => {
			this.opened = opened;
		});
	}

	public toggleSidenav() {
		this.sidenavService.toggle();
	}

	public navigate(destination: string) {
		this.router.navigate([destination]).finally(() => {
			this.toggleSidenav();
		});
	}

	public scrollToSection(sectionId: string) {
		document.getElementById(sectionId)?.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
	}
}
