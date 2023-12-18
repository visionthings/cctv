import { Component, Inject, Injectable } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { ContactUsService } from '../../../services/contact-us.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Subscription, first } from 'rxjs';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss',
})
@Injectable({ providedIn: 'root' })
export class ContactUsFormComponent {
  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService,
    public dialog: MatDialog
  ) {}

  // Contact us form validation
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(
          /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
        ),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(3)]],
  });

  get name() {
    return this.contactForm.controls['name'];
  }
  get phone() {
    return this.contactForm.controls['phone'];
  }
  get email() {
    return this.contactForm.controls['email'];
  }
  get subject() {
    return this.contactForm.controls['subject'];
  }
  get message() {
    return this.contactForm.controls['message'];
  }

  openDialog(message: string) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        message: message,
      },
    });
  }

  onSubmit(): void {
    this.contactForm.markAllAsTouched();
    this.contactUsService
      .sendMessage(this.contactForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.contactForm.reset();
          this.openDialog($localize`تم الإرسال بنجاح، شكرا لتواصلكم معنا.`);
        },
        error: () => {
          this.openDialog(
            $localize`تعذر الإرسال في الوقت الحالي، يرجى المحاولة في وقت آخر.`
          );
        },
      });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'contact-us-modal.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
