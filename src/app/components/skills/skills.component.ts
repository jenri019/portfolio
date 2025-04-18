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
    technologies: { icon: string; name: string }[] = [
        { icon: 'angular', name: 'Angular' },
        { icon: 'cognito', name: 'AWS Cognito' },
        { icon: 'bootstrap', name: 'Bootstrap' },
        { icon: 'capacitor', name: 'Capacitor' },
        { icon: 'css', name: 'CSS' },
        { icon: 'django', name: 'Django' },
        { icon: 'figma', name: 'Figma' },
        { icon: 'git', name: 'Git' },
        { icon: 'html', name: 'HTML' },
        { icon: 'javascript', name: 'JavaScript' },
        { icon: 'mui', name: 'Material UI' },
        { icon: 'mysql', name: 'MySQL' },
        { icon: 'ngrx', name: 'NgRx' },
        { icon: 'node', name: 'Node.js' },
        { icon: 'php', name: 'PHP' },
        { icon: 'python', name: 'Python' },
        { icon: 'react', name: 'React' },
        { icon: 'redux', name: 'Redux' },
        { icon: 'sequelize', name: 'Sequelize' },
        { icon: 'sqlite', name: 'SQLite' },
        { icon: 'sqlserver', name: 'SQL Server' },
        { icon: 'tailwindcss', name: 'Tailwind CSS' },
        { icon: 'typescript', name: 'TypeScript' },
        { icon: 'zap', name: 'OWASP-ZAP' }
    ];
}
