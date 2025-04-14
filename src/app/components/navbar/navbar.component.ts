import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    imports: [
        CommonModule,
        MatMenuModule,
        TranslateModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    currentLanguage: string = 'es-MX';
    navigation: string[] = ['language', 'download'];

    constructor(
        private _translate: TranslateService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.currentLanguage = localStorage.getItem('lang') || 'en-US';
            this._translate.use(this.currentLanguage);
        }
    }

    setLanguage(lang: string) {
        this._translate.use(lang);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('lang', lang);
        }
        this.currentLanguage = lang;
    }

    openLink(option: number): void {
        let url = '';
        switch (option) {
            case 0:
                const recipient = 'j.enrique209436@gmail.com';
                const subject = 'Saludos';
                const body = encodeURIComponent('Hola, me gustaría contactarte...');
                url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
                break;
            case 1:
                url = 'https://github.com/jenri019'
                break;
            default:
                const phoneNumber = '527713724171'; // Reemplaza con el número de teléfono (incluye el código de país)
                const message = encodeURIComponent('¡Hola! Me gustaría ponerme en contacto contigo.'); // Mensaje predefinido
                url = `https://wa.me/${phoneNumber}?text=${message}`;
                break;
        }
        window.open(url, '_blank');
    }
}
