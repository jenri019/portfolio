import { Component, inject } from '@angular/core';
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { MetaService } from './services/meta.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { SkillsComponent } from "./components/skills/skills.component";

@Component({
    selector: 'app-root',
    imports: [AboutComponent, HeaderComponent, ProjectsComponent, ExperienceComponent, SkillsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    _metaService = inject(MetaService);
    _translateService = inject(TranslateService);
    _languageService = inject(LanguageService);

    ngOnInit() {
        this._translateService.onLangChange.subscribe(() => { // Espera cambios de idioma
            this.updateMeta();
        });

        this.updateMeta();
    }

    private updateMeta() {
        this._metaService.updateMetaTags({
            title: 'meta.title',          // Clave para el título (traducido)
            description: 'meta.description', // Clave para la descripción (traducida)
            keywords: 'meta.keywords' // Opcional: palabras clave (traducido)
        });
    }
}
