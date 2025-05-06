import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [
        CommonModule,
        TranslateModule
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    staticData = [
        {
            title: 'Mi Gestion Sukarne',
            url: 'https://example.com/proyecto1',
            repo: '',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'NodeJS', 'Sequelize',  'SQL Server'],
        },
        {
            title: 'Visibility',
            url: 'https://example.com/proyecto1',
            repo: '',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'NgRx'],
        },
        {
            title: 'Hyundai Loyalty App',
            url: 'https://play.google.com/store/apps/details?id=com.hyundai.apployalty&hl=es_MX',
            repo: '',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: true,
            has_repo: false,
            technologies: ['Angular', 'Capacitor', 'TypeScript', 'HTML5', 'CSS3', 'NgRx'],
        },
        {
            title: 'Portal de promociones',
            url: 'https://example.com/proyecto1',
            repo: '',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'NgRx'],
        },
        {
            title: 'Soluciones de empaque MyM',
            url: 'https://example.com/proyecto2',
            repo: '',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'NgRx'],
        }
    ];

    goToProject(url: string) {
        window.open(url, '_blank');
    }
}
