import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppThemeComponent } from '../app-theme-component';

@Component({
  selector: 'app-header-component',
  imports: [
    NgOptimizedImage,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppThemeComponent,
  ],
  templateUrl: './app-header-component.html',
  styleUrl: './app-header-component.scss',
})
export class AppHeaderComponent implements OnInit {
  responsiveManager = inject(BreakpointObserver);

  ngOnInit() {
    this.responsiveManager.observe(Breakpoints.TabletLandscape).subscribe((result) => {
      if (result.matches) {
        console.log('screen matches TabletLandscape');
      }
    });
  }
}
