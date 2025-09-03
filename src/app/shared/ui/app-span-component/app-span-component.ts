import { Component, input } from '@angular/core';

@Component({
  selector: 'app-span-component',
  imports: [],
  templateUrl: './app-span-component.html',
  styleUrl: './app-span-component.scss',
})
export class AppSpanComponent {
  readonly title = input<string>();
  readonly subtitle = input<string>();
}
