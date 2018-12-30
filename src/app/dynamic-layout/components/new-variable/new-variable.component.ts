import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'dl-new-variable',
  templateUrl: './new-variable.component.html',
  styleUrls: ['./new-variable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewVariableComponent implements OnInit {
  variableName: string;

  constructor(public dialogRef: MatDialogRef<NewVariableComponent>) {}

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }

  addNewVariable() {
    this.dialogRef.close(this.variableName);
  }
}
