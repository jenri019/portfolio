// core/services/meta.service.ts
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

// core/services/meta.service.ts
@Injectable({ providedIn: 'root' })
export class MetaService {

    _meta = inject(Meta);
    _title = inject(Title);
    _translate = inject(TranslateService);

    // core/services/meta.service.ts
    // core/services/meta.service.ts
    updateMetaTags(metaData: {
        title: string;                // Clave de traducción para <title> y og:title
        description: string;          // Clave para meta description y og:description
        keywords: string;            // Opcional: Palabras clave (meta keywords)
    }) {
        this._translate.get([metaData.title, metaData.description, metaData.keywords]).subscribe(translations => {
            const title = translations[metaData.title];
            const description = translations[metaData.description];
            const keywords = translations[metaData.keywords];

            // 1. Título y descripción básica (SEO)
            this._title.setTitle(title);
            this._meta.updateTag({ name: 'description', content: description });

            // 2. Open Graph (Redes sociales)
            this._meta.updateTag({ property: 'og:title', content: title });
            this._meta.updateTag({ property: 'og:description', content: description });

            // 3. Twitter Card
            this._meta.updateTag({ name: 'twitter:title', content: title });
            this._meta.updateTag({ name: 'twitter:description', content: description });

            this._meta.updateTag({ name: 'keywords', content: keywords });
        });
    }
}
