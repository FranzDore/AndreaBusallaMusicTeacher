import { Component } from '@angular/core';
import { InstagramPostComponent } from '../../shared/components/instagram-post/instagram-post.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InstagramPostComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
