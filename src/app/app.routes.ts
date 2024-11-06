import { Routes } from '@angular/router';

export const paths = {
	HOME: 'home',
	ABOUT: 'about',
}

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent)
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
	},
	{
		path: '**',
		loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent)
	}
];
