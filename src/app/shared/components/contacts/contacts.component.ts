import { Component } from '@angular/core';
import { HoverableImageComponent } from '../hoverable-image/hoverable-image.component';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
	selector: 'app-contacts',
	standalone: true,
	imports: [HoverableImageComponent],
	templateUrl: './contacts.component.html',
	styleUrl: './contacts.component.css'
})
export class ContactsComponent extends BaseComponent {}
