import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-main',
  imports: [AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
