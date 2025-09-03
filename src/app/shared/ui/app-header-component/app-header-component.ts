import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslatePipe } from '@ngx-translate/core';
import { AppStore } from '../../providers/app-store';
import { AppLanguageComponent } from '../app-language-component';
import { AppThemeComponent } from '../app-theme-component';

@UntilDestroy()
@Component({
  selector: 'app-header-component',
  imports: [
    TranslatePipe,
    NgOptimizedImage,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    AppThemeComponent,
    AppLanguageComponent,
  ],
  templateUrl: './app-header-component.html',
  styleUrl: './app-header-component.scss',
})
export class AppHeaderComponent {
  readonly store = inject(AppStore);

  opeMenu() {
    this.store.openSidenav(!this.store.showSidenav());
  }
}
