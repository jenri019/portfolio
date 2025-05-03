import { Component, inject, signal } from '@angular/core';
import { HeaderOptionsComponent } from "./header-options/header-options.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    imports: [HeaderOptionsComponent],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    _translate = inject(TranslateService);
    currentLanguage = signal<string>('es-MX');

    ngOnInit() {
        const initialLanguage = localStorage.getItem('lang') ?? 'es-MX';
        this.currentLanguage.set(initialLanguage);
        this._translate.use(this.currentLanguage());
    }

    setLanguage(lang: string) {
        localStorage.setItem('lang', lang);
        this.currentLanguage.set(lang);
        this._translate.use(this.currentLanguage());
    }
}
