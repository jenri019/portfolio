import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
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
      image: '/assets/images/Kynseed Hunt.webp'
    },
    {
      url: 'https://example.com/proyecto1',
      image: '/assets/images/Kynseed Hunt.webp'
    },
    {
      url: 'https://example.com/proyecto1',
      image: '/assets/images/Kynseed Hunt.webp'
    },
    {
      url: 'https://example.com/proyecto1',
      image: '/assets/images/Kynseed Hunt.webp'
    },
    {
      url: 'https://example.com/proyecto2',
      image: '/assets/images/Kynseed Hunt.webp'
    }
  ];
}
