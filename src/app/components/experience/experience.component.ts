import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    websites = [
        {
            name: 'dostics',
            url: 'https://www.dostics.com.mx/',
        },
        {
            name: 'mecate',
            url: 'https://casamecate.com',
        }
    ]

    visitWebsite(website: string) {
        window.open(website, '_blank');
    }
}
