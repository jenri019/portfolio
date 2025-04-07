import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FadeInDirective,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent,
    NavbarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
