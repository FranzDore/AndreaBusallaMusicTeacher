import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(BrowserAnimationsModule),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withViewTransitions())
	]
};
