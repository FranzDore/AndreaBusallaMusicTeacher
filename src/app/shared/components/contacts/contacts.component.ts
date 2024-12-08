import { Component } from '@angular/core';
import { HoverableImageComponent } from '../hoverable-image/hoverable-image.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HoverableImageComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
