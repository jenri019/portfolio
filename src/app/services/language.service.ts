// language.service.ts
import { Injectable, signal, effect, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    _translate = inject(TranslateService);
    private readonly LANGUAGE_KEY = 'app_language';
    private availableLanguages = ['es-MX', 'en-US'] as const;

    // Signal para el idioma actual
    currentLanguage = signal<'es-MX' | 'en-US'>(
        this.getLanguageFromStorage() || 'es-MX'
    );

    constructor() {
        // Efecto para persistir cambios en localStorage
        effect(() => {
            localStorage.setItem(this.LANGUAGE_KEY, this.currentLanguage());
        });
    }

    toggleLanguage() {
        this.currentLanguage.update(current =>
            current === 'es-MX' ? 'en-US' : 'es-MX'
        );
        this._translate.use(this.currentLanguage());
    }

    private getLanguageFromStorage(): 'es-MX' | 'en-US' | null {
        const lang = localStorage.getItem(this.LANGUAGE_KEY);
        return this.availableLanguages.includes(lang as any)
            ? lang as 'es-MX' | 'en-US'
            : null;
    }
}
