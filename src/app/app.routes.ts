import { Routes } from '@angular/router';

export const paths = {
	HOME: 'home',
	ABOUT: 'about',
	CONTACTS: 'contacts',
}

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent)
	},
	{
		path: '**',
		loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent)
	}
];
