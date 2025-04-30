import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-root',
    imports: [AboutComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'portfolio-enrique';
}
