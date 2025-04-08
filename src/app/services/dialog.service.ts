import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
      public dialog: MatDialog,
  ) { }

  showDialog = (body:any) => {
      this.dialog.open(DialogComponent, {
          data: body
      });
  }
}
