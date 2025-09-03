import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslatePipe } from '@ngx-translate/core';
import { AppStore } from '../../providers/app-store';
import { AppCardSmallComponent } from '../../ui/app-card-small-component';
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
    AppCardSmallComponent,
  ],
  templateUrl: './app-home-component.html',
  styleUrl: './app-home-component.scss',
})
export class AppHomeComponent {
  readonly store = inject(AppStore);
}
