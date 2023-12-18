import { Component } from '@angular/core';
import { ContactUsHeaderComponent } from './contact-us-header/contact-us-header.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsHeaderComponent, ContactUsFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
