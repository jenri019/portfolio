import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from '../../services/dialog.service';

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
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node', 'Sequelize', 'PostgreSQL'],
        },
        {
            title: 'Visibility',
            url: 'https://example.com/proyecto1',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        },
        {
            title: 'Hyundai Loyalty App',
            url: 'https://play.google.com/store/apps/details?id=com.hyundai.apployalty&hl=es_MX',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: true,
            technologies: ['Angular', 'Capacitor', 'TypeScript', 'HTML', 'CSS'],
        },
        {
            title: 'Portal de promociones',
            url: 'https://example.com/proyecto1',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        },
        {
            title: 'Soluciones de empaque MyM',
            url: 'https://example.com/proyecto2',
            image: '/assets/images/Kynseed Hunt.webp',
            has_project: false,
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        }
    ];

    constructor(
        private _dialogService: DialogService
    ) {}


    showDetails(index: number): void {
        this._dialogService.showDialog({
            index: index,
        });
        // Aquí puedes agregar la lógica que necesites
    }

    goToProject(url: string) {
        window.open(url, '_blank');
    }
}
