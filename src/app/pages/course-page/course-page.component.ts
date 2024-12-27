import { Component } from '@angular/core';
import { InfoCourseCardComponent } from '../../shared/components/info-course-card/info-course-card.component';

@Component({
	selector: 'app-course-page',
	standalone: true,
	imports: [InfoCourseCardComponent],
	templateUrl: './course-page.component.html',
	styleUrl: './course-page.component.css'
})
export class CoursePageComponent {
	// TODO: This is temporary
	public courseChapters = {
		beginner: ['Capitolo 1', 'Capitolo 2', 'Capitolo 3'],
		advanced: ['Capitolo 4', 'Capitolo 5', 'Capitolo 6']
	}
}
