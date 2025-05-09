import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'header-options',
    imports: [
        TranslateModule
    ],
    templateUrl: './header-options.component.html'
})
export class HeaderOptionsComponent {
    private _languageService = inject(LanguageService);
    language = this._languageService.currentLanguage;

    toggleLanguage = () => {
        this._languageService.toggleLanguage();
    }

    exec = (option: number) => {
        let url = '';
        if (option === 4) {
            url = `/assets/data/CV José Enrique García Calderón${this.language() === 'en-US' ? ' ENG' : ''}.pdf`;
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV_Jose_Enrique_Garcia_Calderon.pdf';
            link.click();
            return;
        }
        switch (option) {
            case 1:
                const recipient = 'j.enrique209436@gmail.com';
                const subject = 'Saludos';
                const body = encodeURIComponent('Hola, me gustaría contactarte...');
                url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
                break;
            case 2:
                const phoneNumber = '527713724171'; // Reemplaza con el número de teléfono (incluye el código de país)
                const message = encodeURIComponent('¡Hola! Me gustaría ponerme en contacto contigo.'); // Mensaje predefinido
                url = `https://wa.me/${phoneNumber}?text=${message}`;
                break;
            default:
                url = 'https://github.com/jenri019';
                break;
        }
        window.open(url, '_blank');
    }
}
