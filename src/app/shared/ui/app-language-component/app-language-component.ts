import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

export type Language = 'es' | 'en';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-language-component',
  imports: [TranslatePipe, MatMenuModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './app-language-component.html',
  styleUrl: './app-language-component.scss',
})
export class AppLanguageComponent {
  private readonly translateManager = inject(TranslateService);
  language = signal<Language | string>(this.translateManager.getCurrentLang());
  languageFlag = computed(() => {
    let iconName = null;
    switch (this.language()) {
      case 'en':
        iconName = 'usa-flag';
        break;
      default:
        iconName = 'spain-flag';
        break;
    }
    return iconName;
  });

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    // register icon usa-flag
    iconRegistry.addSvgIcon(
      'usa-flag',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/usa.svg')
    );
    // register icon spain-flag
    iconRegistry.addSvgIcon(
      'spain-flag',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/flags/spain.svg')
    );
  }

  setLanguage(language: Language) {
    if (this.translateManager.getCurrentLang() !== language) {
      this.translateManager.use(language).subscribe(() => {
        this.language.set(this.translateManager.getCurrentLang());
      });
    }
  }
}
