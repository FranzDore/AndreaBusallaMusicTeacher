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

}
