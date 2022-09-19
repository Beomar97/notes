import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.scss'],
})
export class CreateNoteDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateNoteDialogComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', []],
      description: ['', []],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
