import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hoverable-image',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './hoverable-image.component.html',
  styleUrl: './hoverable-image.component.css'
})
export class HoverableImageComponent {
	@Input() public source: string = '';
	@Input() public btnIconClass: string = '';
	@Input() public overlayText: string = '';
	@Input() public btnLabel: string = '';
	@Input() public pageLink: string = '';

	public isDimmed: boolean = false;

	public onHover(isHovered: boolean) {
		this.isDimmed = isHovered;
	}
}
