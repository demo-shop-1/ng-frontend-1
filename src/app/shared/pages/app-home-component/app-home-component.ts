import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslatePipe } from '@ngx-translate/core';
import { AppStore } from '../../providers/app-store';
import { AppCardComponent } from '../../ui/app-card-component';
import { AppHeaderComponent } from '../../ui/app-header-component';
import { AppMenuComponent } from '../../ui/app-menu-component';
import { AppSpanComponent } from '../../ui/app-span-component';

@Component({
  selector: 'app-home-component',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    AppHeaderComponent,
    MatIconModule,
    AppMenuComponent,
    AppSpanComponent,
    TranslatePipe,
    AppCardComponent,
  ],
  templateUrl: './app-home-component.html',
  styleUrl: './app-home-component.scss',
})
export class AppHomeComponent {
  readonly store = inject(AppStore);
}
