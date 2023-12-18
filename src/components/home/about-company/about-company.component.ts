import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss',
})
export class AboutCompanyComponent {}
