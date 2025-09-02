import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
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
export class AppHeaderComponent implements OnInit {
  private readonly responsiveManager = inject(BreakpointObserver);
  readonly store = inject(AppStore);
  isWebPortrait = signal(false);
  breakpointsMobile = [Breakpoints.XSmall, Breakpoints.Small];

  ngOnInit() {
    this.responsiveManager
      .observe(this.breakpointsMobile)
      .pipe(untilDestroyed(this))
      .subscribe((result) => {
        if (result.matches) {
          this.isWebPortrait.set(false);
        } else {
          this.isWebPortrait.set(true);
        }
      });
  }

  opeMenu() {
    this.store.openSidenav(!this.store.showSidenav());
  }
}
