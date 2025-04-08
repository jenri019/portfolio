import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule,
        TranslateModule
    ],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss'
})
export class DialogComponent {
    project: any = {};
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private translate: TranslateService) { } // Asegúrate de que está inyectado aquí

    ngOnInit() {
        this.getTranslation();
    }

    getTranslation() {
        this.translate.get('projects.list').subscribe({
            next: (res: any) => {
                this.project = res[this.data.index];
            },
            error: (err) => {
                console.error('Translation error:', err);
            }
        });
    }
}