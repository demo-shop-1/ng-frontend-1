import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslatePipe } from '@ngx-translate/core';
import { ProductQueryApplication } from '../../../features/products/application/product-query-application';
import { ProductModel } from '../../../features/products/domain/models/product-model';
import { AppStore } from '../../providers/app-store';
import { AppCardLargeComponent } from '../../ui/app-card-large-component';
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
    AppCardLargeComponent,
  ],
  templateUrl: './app-home-component.html',
  styleUrl: './app-home-component.scss',
})
export class AppHomeComponent implements OnInit {
  readonly store = inject(AppStore);
  private readonly productQueryApplication = inject(ProductQueryApplication);
  topProducts = signal<ProductModel[]>([]);

  ngOnInit(): void {
    this.loadTopProducts();
  }

  loadTopProducts() {
    this.productQueryApplication.findAllPageable(0, 10).then((response) => {
      this.topProducts.set(response);
    });
  }
}
