import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [NavbarComponent, FooterComponent, SidenavComponent, RouterModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {}
