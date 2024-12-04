import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hoverable-image',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hoverable-image.component.html',
  styleUrl: './hoverable-image.component.css'
})
export class HoverableImageComponent {
	@Input() public source: string = '';
	@Input() public overlayText: string = '';

	public isDimmed: boolean = false;

	public onHover(isHovered: boolean) {
		this.isDimmed = isHovered;
	}
}
