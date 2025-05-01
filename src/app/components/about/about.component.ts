import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    imports: [
        CommonModule,
        TranslateModule
    ],
    templateUrl: './about.component.html'
})
export class AboutComponent { }
