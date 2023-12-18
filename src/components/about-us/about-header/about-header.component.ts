import { NgOptimizedImage } from '@angular/common';
import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-about-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.scss',
})
export class AboutHeaderComponent {
  constructor(@Inject(LOCALE_ID) public locale: string) {}
  isAr(): boolean {
    if (this.locale === 'ar-SA') {
      return true;
    } else {
      return false;
    }
  }
}
