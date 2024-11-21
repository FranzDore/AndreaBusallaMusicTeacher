import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
	public isDimmed: boolean = false;

	public onHover(isHovered: boolean) {
		this.isDimmed = isHovered;
	}
}
