import { CommonModule } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../services/language.service';

@Component({
    selector: 'header-options',
    imports: [
        FormsModule,
        CommonModule
    ],
    templateUrl: './header-options.component.html'
})
export class HeaderOptionsComponent {
    private _languageService = inject(LanguageService);
    language = this._languageService.currentLanguage;

    toggleLanguage() {
        this._languageService.toggleLanguage();
    }
}
