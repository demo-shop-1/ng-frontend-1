import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';
import { AppThemeService, Theme } from '../../services/app-theme-service';

@Component({
  selector: 'app-theme-component',
  imports: [TranslatePipe, MatTooltipModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './app-theme-component.html',
  styleUrl: './app-theme-component.scss',
})
export class AppThemeComponent {
  private readonly themeManager = inject(AppThemeService);
  theme = this.themeManager.theme;

  setTheme(theme: Theme): void {
    this.themeManager.setTheme(theme);
  }
}
