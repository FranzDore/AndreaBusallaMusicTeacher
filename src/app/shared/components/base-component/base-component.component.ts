import { Component } from '@angular/core';
import { paths } from '../../../app.routes';

@Component({
  selector: 'app-base-component',
  standalone: true,
  imports: [],
  templateUrl: './base-component.component.html',
  styleUrl: './base-component.component.css'
})
export class BaseComponent {
	public paths = paths;
}
