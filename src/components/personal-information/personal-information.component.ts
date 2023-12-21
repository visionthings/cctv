import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  // Save data form validation
  saveData = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[\u0621-\u064A\u0660-\u0669 ]+$/),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
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
    commercial_number: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d+$/),
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    ],
    address: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[\u0621-\u064A\u0660-\u0669 ]+$/),
      ],
    ],
  });

  get name() {
    return this.saveData.controls['name'];
  }
  get email() {
    return this.saveData.controls['email'];
  }

  get phone() {
    return this.saveData.controls['phone'];
  }
  get commercial_number() {
    return this.saveData.controls['commercial_number'];
  }
  get address() {
    return this.saveData.controls['address'];
  }

  onSubmit(): void {
    this.saveData.markAllAsTouched();
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'name',
        typeof this.saveData.controls.name.value === 'string'
          ? this.saveData.controls.name.value
          : ''
      );
      localStorage.setItem(
        'email',
        typeof this.saveData.controls.email.value === 'string'
          ? this.saveData.controls.email.value
          : ''
      );
      localStorage.setItem(
        'phone',
        typeof this.saveData.controls.phone.value === 'string'
          ? this.saveData.controls.phone.value
          : ''
      );
      localStorage.setItem(
        'commercial_number',
        typeof this.saveData.controls.commercial_number.value === 'string'
          ? this.saveData.controls.commercial_number.value
          : ''
      );
      localStorage.setItem(
        'address',
        typeof this.saveData.controls.address.value === 'string'
          ? this.saveData.controls.address.value
          : ''
      );
    }
    this.router.navigateByUrl('/cameras-details');
  }
}
