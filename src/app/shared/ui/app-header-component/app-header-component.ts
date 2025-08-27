import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppThemeComponent } from '../app-theme-component';

@Component({
  selector: 'app-header-component',
  imports: [
    MatInputModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppThemeComponent,
  ],
  templateUrl: './app-header-component.html',
  styleUrl: './app-header-component.scss',
})
export class AppHeaderComponent {}
