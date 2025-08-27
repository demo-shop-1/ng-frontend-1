import { DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { LOCAL_STORAGE } from '../../providers/local-storage';

export const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'themePreference';
export const DARK_MODE_CLASS_NAME = 'dark-mode';
export const LIGHT_MODE_CLASS_NAME = 'light-mode';
export const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';

export type Theme = 'dark' | 'light' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly localStorage = inject(LOCAL_STORAGE);

  readonly theme = signal<Theme | null>(this.getThemeFromLocalStorageValue());
  // Zoneless - it's required to notify that theme was changed. It could be removed when signal-based components will be available.
  readonly themeChanged$ = new Subject<void>();

  constructor() {
    this.loadThemePreference();
    this.watchPreferredColorScheme();
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.setThemeInLocalStorage();
    this.setThemeBodyClasses(theme === 'auto' ? preferredScheme() : theme);
  }

  // 1. Read theme preferences stored in localStorage
  // 2. In case when there are no stored user preferences, then read them from device preferences.
  private loadThemePreference(): void {
    const savedUserPreference = this.getThemeFromLocalStorageValue();
    const useTheme = savedUserPreference ?? 'auto';

    this.theme.set(useTheme);
    this.setThemeBodyClasses(useTheme === 'auto' ? preferredScheme() : useTheme);
  }

  // Set theme classes on the body element
  private setThemeBodyClasses(theme: 'dark' | 'light'): void {
    const documentClassList = this.document.documentElement.classList;
    const bodyStyle = this.document.body.style;
    if (theme === 'dark') {
      documentClassList.add(DARK_MODE_CLASS_NAME);
      documentClassList.remove(LIGHT_MODE_CLASS_NAME);
    } else {
      documentClassList.add(LIGHT_MODE_CLASS_NAME);
      documentClassList.remove(DARK_MODE_CLASS_NAME);
    }
    bodyStyle.setProperty('color-scheme', theme);
    this.themeChanged$.next();
  }

  private getThemeFromLocalStorageValue(): Theme | null {
    const theme = this.localStorage?.getItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY) as Theme | null;
    return theme ?? null;
  }

  private setThemeInLocalStorage(): void {
    if (this.theme()) {
      this.localStorage?.setItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY, this.theme()!);
    }
  }

  private watchPreferredColorScheme() {
    window.matchMedia(PREFERS_COLOR_SCHEME_DARK).addEventListener('change', (event) => {
      const preferredScheme = event.matches ? 'dark' : 'light';
      this.setThemeBodyClasses(preferredScheme);
    });
  }
}
// read in the browser the scheme
function preferredScheme(): 'dark' | 'light' {
  return window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? 'dark' : 'light';
}
