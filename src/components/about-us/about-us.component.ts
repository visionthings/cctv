import { Component } from '@angular/core';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { IntroComponent } from './intro/intro.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { CompanyValuesComponent } from './company-values/company-values.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    AboutHeaderComponent,
    IntroComponent,
    OurVisionComponent,
    CompanyValuesComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}
