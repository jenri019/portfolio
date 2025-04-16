import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-main',
  imports: [AboutComponent, ProjectsComponent, SkillsComponent, ExperienceComponent, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
