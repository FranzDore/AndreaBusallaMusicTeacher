import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const paths = {
	HOME: 'home',
	ABOUT: 'about',
	CONTACTS: 'contacts',
	COURSE: 'course'
};

export const routes: Routes = [
	{
		path: '',
		redirectTo: paths.HOME,
		pathMatch: 'full'
	},
	{
		path: paths.HOME,
		loadComponent: () =>
			import('./pages/homepage/homepage.component').then(m => m.HomepageComponent)
	},
	{
		path: paths.ABOUT,
		loadComponent: () =>
			import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent)
	},
	{
		path: paths.CONTACTS,
		loadComponent: () =>
			import('./pages/contacts-page/contacts-page.component').then(
				m => m.ContactsPageComponent
			)
	},
	{
		path: paths.COURSE,
		loadComponent: () =>
			import('./pages/course-page/course-page.component').then(m => m.CoursePageComponent)
	},
	{
		path: '**',
		loadComponent: () =>
			import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
	}
];
