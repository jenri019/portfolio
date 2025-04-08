import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Sass',
    'Bootstrap',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'GitHub',
    'RESTful APIs',
    'GraphQL'
  ];
  duplicatedSkills = [...this.skills, ...this.skills]; // Duplica los elementos para el efecto
}
