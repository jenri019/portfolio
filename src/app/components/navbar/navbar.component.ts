import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
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
    navigation:string[] = [
        'language',
        'download'
    ];

    constructor(
        private _translate: TranslateService
    ) { }
  
    ngOnInit() {
      this.currentLanguage = localStorage.getItem('lang') || 'en-US';
      this._translate.use(this.currentLanguage);
    }

    setLanguage(lang: string) {
        this._translate.use(lang);
        localStorage.setItem('lang', lang);
        this.currentLanguage = lang;
    }
}
