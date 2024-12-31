import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-theme-button-toggle',
	standalone: true,
	imports: [],
	templateUrl: './theme-button-toggle.component.html',
	styleUrl: './theme-button-toggle.component.css'
})
export class ThemeButtonToggleComponent {
	constructor(private themeService: ThemeService) {}

	public toggleTheme() {
		this.themeService.toggleTheme();
	}
}
