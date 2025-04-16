// core/services/meta.service.ts
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

// core/services/meta.service.ts
@Injectable({ providedIn: 'root' })
export class MetaService {
    constructor(
        private meta: Meta,
        private title: Title,
        private translate: TranslateService
    ) { }

    // core/services/meta.service.ts
    // core/services/meta.service.ts
    updateMetaTags(metaData: {
        title: string;                // Clave de traducción para <title> y og:title
        description: string;          // Clave para meta description y og:description
        keywords: string;            // Opcional: Palabras clave (meta keywords)
    }) {
        this.translate.get([metaData.title, metaData.description, metaData.keywords]).subscribe(translations => {
            const title = translations[metaData.title];
            const description = translations[metaData.description];
            const keywords = translations[metaData.keywords];

            // 1. Título y descripción básica (SEO)
            this.title.setTitle(title);
            this.meta.updateTag({ name: 'description', content: description });

            // 2. Open Graph (Redes sociales)
            this.meta.updateTag({ property: 'og:title', content: title });
            this.meta.updateTag({ property: 'og:description', content: description });

            // 3. Twitter Card
            this.meta.updateTag({ name: 'twitter:title', content: title });
            this.meta.updateTag({ name: 'twitter:description', content: description });

            this.meta.updateTag({ name: 'keywords', content: keywords });
        });
    }
}