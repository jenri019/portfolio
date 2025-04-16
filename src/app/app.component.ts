import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetaService } from './services/meta.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'portfolio';

    constructor(
        private metaService: MetaService,
        private translate: TranslateService // Añade esto
    ) { }

    ngOnInit() {
        this.translate.onLangChange.subscribe(() => { // Espera cambios de idioma
            this.updateMeta();
        });

        this.updateMeta(); // Llama la primera vez
    }

    private updateMeta() {
        this.metaService.updateMetaTags({
            title: 'meta.title',          // Clave para el título (traducido)
            description: 'meta.description', // Clave para la descripción (traducida)
            keywords: 'meta.keywords' // Opcional: palabras clave (traducido)
        });
    }
}