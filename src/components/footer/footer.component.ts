import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialMedia = [
    {
      id: 1,
      title: 'Facebok',
      iconURL: '../../assets/images/social_media/fb.png',
      url: 'https://www.facebook.com/visionthings.sa',
    },
    {
      id: 2,
      title: 'X',
      iconURL: '../../assets/images/social_media/x.png',
      url: 'https://twitter.com/visionthings_sa',
    },
    {
      id: 3,
      title: 'LinkedIn',
      iconURL: '../../assets/images/social_media/linkedin.png',
      url: 'https://www.linkedin.com/company/visionthings',
    },
    {
      id: 4,
      title: 'YouTube',
      iconURL: '../../assets/images/social_media/yt.png',
      url: 'https://www.youtube.com/@visionthings_sa',
    },
  ];

  quicklinks = [
    { id: 1, title: $localize`الرئيسية`, route: '/home' },
    { id: 2, title: $localize`عن الشركة`, route: '/about-us' },
    { id: 3, title: $localize`اتصل بنا`, route: '/contact-us' },
  ];

  terms = [
    {
      id: 1,
      title: $localize`الأحكام والشروط`,
      route: '/terms-and-conditions',
    },
    { id: 2, title: $localize`سياسة الخصوصية`, route: '/privacy-policy' },
    {
      id: 3,
      title: $localize`سياسة الاستبدال والاسترجاع`,
      route: '/return-policy',
    },
  ];
}
