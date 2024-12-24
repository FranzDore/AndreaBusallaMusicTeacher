import { Routes } from '@angular/router';

export const paths = {
	HOME: 'home',
	ABOUT: 'about',
	CONTACTS: 'contacts',
}

export const routes: Routes = [
	{
		path: '',
		redirectTo: paths.HOME,
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent)
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent)
	},
	{
		path: 'contacts',
		loadComponent: () => import('./pages/contacts-page/contacts-page.component').then(m => m.ContactsPageComponent)
	},
	{
		path: '**',
		loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
	}
];
