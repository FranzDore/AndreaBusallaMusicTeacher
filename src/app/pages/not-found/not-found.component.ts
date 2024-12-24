import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base-component/base-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent extends BaseComponent {

}
