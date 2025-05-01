import { Component } from '@angular/core';

@Component({
  selector: 'header-options',
  imports: [],
  templateUrl: './header-options.component.html'
})
export class HeaderOptionsComponent {
    changeLanguage(language: string) {
        // Implement your language change logic here
        console.log('Language changed', language);
    }
}
