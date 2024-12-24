import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [NavbarComponent, SidenavComponent, RouterModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {}
