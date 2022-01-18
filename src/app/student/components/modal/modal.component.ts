import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  form = this.builder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    patronus: ['', Validators.required]
  })

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private builder: FormBuilder
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
