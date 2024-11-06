import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { paths } from '../../../app.routes';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	public paths = paths;

	public scrollToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
}
