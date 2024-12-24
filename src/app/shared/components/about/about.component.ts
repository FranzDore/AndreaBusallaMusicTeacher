import { Component } from '@angular/core';
import { HoverableImageComponent } from '../hoverable-image/hoverable-image.component';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [HoverableImageComponent],
	templateUrl: './about.component.html',
	styleUrl: './about.component.css'
})
export class AboutComponent extends BaseComponent {}
