// language.service.ts
import { Injectable, signal, effect, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    _translate = inject(TranslateService);

    // Signal para el idioma actual
    currentLanguage = signal<'es-MX' | 'en-US'>('es-MX');

    toggleLanguage() {
        this.currentLanguage.update(current =>
            current === 'es-MX' ? 'en-US' : 'es-MX'
        );
        this._translate.use(this.currentLanguage());
    }
}
