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

// Website is very light, no need to lazy load components :)
// This way we provide smooth animations and navigation

export const routes: Routes = [
	{
		path: '',
		redirectTo: paths.HOME,
		pathMatch: 'full'
	},
	{
		path: paths.HOME,
		component: HomepageComponent
	},
	{
		path: paths.ABOUT,
		component: AboutPageComponent
	},
	{
		path: paths.CONTACTS,
		component: ContactsPageComponent
	},
	{
		path: paths.COURSE,
		component: CoursePageComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];
