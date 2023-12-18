import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact-us-header.component.html',
  styleUrl: './contact-us-header.component.scss',
})
export class ContactUsHeaderComponent {}
