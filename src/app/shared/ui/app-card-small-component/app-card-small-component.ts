import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-small-component',
  imports: [MatCardModule],
  templateUrl: './app-card-small-component.html',
  styleUrl: './app-card-small-component.scss',
})
export class AppCardSmallComponent {
  readonly title = input<string>();
  readonly image = input<string | null>();
}
