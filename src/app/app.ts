import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppHeaderComponent } from './shared/ui/app-header-component';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, MatSidenavModule, MatButtonModule, AppHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('AppRunner');
}
