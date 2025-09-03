import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-large-component',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './app-card-large-component.html',
  styleUrl: './app-card-large-component.scss',
})
export class AppCardLargeComponent {
  image = input<string | null>();
  description = input<string | null>();
  firstAction = input<string | null>();
}
