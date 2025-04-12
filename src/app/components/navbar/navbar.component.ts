import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    imports: [
        CommonModule,
        MatMenuModule,
        TranslateModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    navigation:string[] = [
        'language',
        'download'
    ];
}
