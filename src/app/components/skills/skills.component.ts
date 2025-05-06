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
    technologies: { icon: string }[] = [
        { icon: 'Angular' },
        { icon: 'Angular Material' },
        { icon: 'Cognito' },
        { icon: 'Bootstrap' },
        { icon: 'Capacitor' },
        { icon: 'CSS3' },
        { icon: 'Django' },
        { icon: 'Figma' },
        { icon: 'Git' },
        { icon: 'HTML5' },
        { icon: 'JavaScript' },
        { icon: 'Material UI' },
        { icon: 'MySQL' },
        { icon: 'NgRx' },
        { icon: 'NodeJS' },
        { icon: 'PHP' },
        { icon: 'Python' },
        { icon: 'React' },
        { icon: 'Redux' },
        { icon: 'Sequelize' },
        { icon: 'SQLite' },
        { icon: 'SQL Server' },
        { icon: 'Tailwind CSS' },
        { icon: 'TypeScript' },
        { icon: 'OWASP ZAP' }
    ];
/*     duplicatedTechnologies: any[] = [];

    ngOnInit() {
      this.duplicatedTechnologies = [...this.technologies, ...this.technologies];
    } */
}
