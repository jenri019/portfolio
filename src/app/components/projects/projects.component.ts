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
      url: 'https://example.com/proyecto1',
      image: '/assets/images/Kynseed Hunt.webp',
      has_project: false,
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node', 'Sequelize', 'PostgreSQL'],
    },
    {
      url: 'https://example.com/proyecto1',
      image: '/assets/images/Kynseed Hunt.webp',
      has_project: false,
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      url: 'https://play.google.com/store/apps/details?id=com.hyundai.apployalty&hl=es_MX',
      image: '/assets/images/Kynseed Hunt.webp',
      has_project: true,
      technologies: ['Angular', 'Capacitor', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      url: 'https://example.com/proyecto1',
      image: '/assets/images/Kynseed Hunt.webp',
      has_project: false,
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      url: 'https://example.com/proyecto2',
      image: '/assets/images/Kynseed Hunt.webp',
      has_project: false,
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    }
  ];

  goToProject(url: string) {
    window.open(url, '_blank');
  }
}
