import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-component',
  imports: [MatCardModule],
  templateUrl: './app-card-component.html',
  styleUrl: './app-card-component.scss',
})
export class AppCardComponent {
  readonly title = input<string>();
  readonly image = input<string | null>();
}
