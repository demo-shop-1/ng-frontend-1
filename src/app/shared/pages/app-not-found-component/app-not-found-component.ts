import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { AppHeaderComponent } from '../../ui/app-header-component';
import { AppMenuComponent } from '../../ui/app-menu-component';

@Component({
  selector: 'app-app-not-found-component',
  imports: [
    TranslatePipe,
    MatProgressBarModule,
    AppHeaderComponent,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    AppMenuComponent,
  ],
  templateUrl: './app-not-found-component.html',
  styleUrl: './app-not-found-component.scss',
})
export class AppNotFoundComponent {}
