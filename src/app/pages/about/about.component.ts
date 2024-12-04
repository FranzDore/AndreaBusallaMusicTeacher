import { Component } from '@angular/core';
import { HoverableImageComponent } from '../../shared/components/hoverable-image/hoverable-image.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HoverableImageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
