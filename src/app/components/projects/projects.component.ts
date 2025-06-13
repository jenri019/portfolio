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
            url: '#',
            repo: '#',
            image: 'sukarne',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'NodeJS', 'Sequelize',  'SQL Server', 'Angular Material', 'Bootstrap', 'Tortoise'],
        },
        {
            title: 'Visibility',
            url: '#',
            repo: '#',
            image: 'visibility',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'NgRx', 'Angular Material', 'Tailwind CSS', 'OWASP ZAP', 'Gitlab'],
        },
        {
            title: 'Hyundai Loyalty App',
            url: 'https://play.google.com/store/apps/details?id=com.hyundai.apployalty&hl=es_MX',
            repo: '#',
            image: 'hyundai',
            has_project: true,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'Capacitor', 'HTML5', 'CSS3', 'NgRx', 'Angular Material', 'Gitlab'],
        },
        {
            title: 'Portal de promociones',
            url: '#',
            repo: '#',
            image: 'palacio',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'Cognito', 'HTML5', 'CSS3', 'NgRx', 'Angular Material', 'Tailwind CSS', 'Gitlab'],
        },
        {
            title: 'Soluciones de empaque MyM',
            url: '#',
            repo: '#',
            image: 'empaques',
            has_project: false,
            has_repo: false,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'NgRx', 'Angular Material', 'Tailwind CSS', 'Github'],
        },
        {
            title: 'Mapas app',
            url: '#',
            repo: 'https://github.com/jenri019/maps',
            image: 'mapa',
            has_project: false,
            has_repo: true,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Github'],
        },
        {
            title: 'Teslo-Shop',
            url: '#',
            repo: 'https://github.com/jenri019/teslo-shop.git',
            image: 'teslo',
            has_project: false,
            has_repo: true,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Github', 'Docker'],
        },
        {
            title: 'Mensajeria',
            url: '#',
            repo: 'https://github.com/jenri019/socket-server-front.git',
            image: 'messages',
            has_project: false,
            has_repo: true,
            technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Socket.IO', 'NodeJS', 'Tailwind CSS', 'Github'],
        }
    ];

    openLink(url: string) {
        if (url === '#') return;
        window.open(url, '_blank');
    }
}
