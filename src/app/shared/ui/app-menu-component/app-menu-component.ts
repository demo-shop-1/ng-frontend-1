import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslatePipe } from '@ngx-translate/core';
import { AppStore } from '../../providers/app-store';

@Component({
  selector: 'app-menu-component',
  imports: [MatSidenavModule, MatIconModule, MatButtonModule, TranslatePipe],
  templateUrl: './app-menu-component.html',
  styleUrl: './app-menu-component.scss',
})
export class AppMenuComponent implements OnInit {
  readonly store = inject(AppStore);
  ngOnInit(): void {
    this.store.loadCategories();
  }
}
