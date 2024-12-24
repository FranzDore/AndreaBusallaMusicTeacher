import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const paths = {
	HOME: 'home',
	ABOUT: 'about',
	CONTACTS: 'contacts',
}

// Website is very light, no need to lazy load components :)
// This way we provide smooth animations and navigation

export const routes: Routes = [
	{
		path: '',
		redirectTo: paths.HOME,
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomepageComponent
	},
	{
		path: 'about',
		component: AboutPageComponent
	},
	{
		path: 'contacts',
		component: ContactsPageComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];
