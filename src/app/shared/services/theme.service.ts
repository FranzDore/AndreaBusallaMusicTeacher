import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'LIGHT' | 'DARK';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private theme$ = new BehaviorSubject<Theme>('LIGHT');
	public themeObservable = this.theme$.asObservable();

	public toggleTheme(): void {
		const currentTheme = this.theme$.getValue();
		const newTheme: Theme = currentTheme === 'DARK' ? 'LIGHT' : 'DARK';
		this.theme$.next(newTheme);
		this.applyTheme(newTheme);
	}

	private applyTheme(theme: Theme): void {
		const body = document.body;
		if (theme === 'DARK') {
			body.classList.add('dark-theme');
			body.classList.remove('light-theme');
		} else {
			body.classList.add('light-theme');
			body.classList.remove('dark-theme');
		}
	}
}
