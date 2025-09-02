import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppHeaderComponent } from '../../ui/app-header-component';
import { AppMenuComponent } from '../../ui/app-menu-component';

@Component({
  selector: 'app-home-component',
  imports: [MatSidenavModule, MatButtonModule, AppHeaderComponent, MatIconModule, AppMenuComponent],
  templateUrl: './app-home-component.html',
  styleUrl: './app-home-component.scss',
})
export class AppHomeComponent {}
