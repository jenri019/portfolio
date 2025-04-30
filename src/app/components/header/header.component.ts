import { Component } from '@angular/core';
import { HeaderOptionsComponent } from "./header-options/header-options.component";

@Component({
    selector: 'app-header',
    imports: [HeaderOptionsComponent],
    templateUrl: './header.component.html'
})
export class HeaderComponent { }
