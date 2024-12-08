import { Component } from '@angular/core';
import { HoverableImageComponent } from "../hoverable-image/hoverable-image.component";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HoverableImageComponent,],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

}
