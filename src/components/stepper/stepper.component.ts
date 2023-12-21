import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent implements OnInit {
  constructor(private router: Router) {}

  items = [
    { id: 1, title: 'الشروط والأحكام', path: 'terms-and-conditions' },
    { id: 2, title: 'المعلومات الشخصية', path: 'personal-information' },
    { id: 3, title: 'أنواع الكاميرات وأعدادها', path: 'cameras-details' },
    { id: 4, title: 'الدفع', path: 'payment' },
  ];

  currentStep: number = 0;
  title: string = '';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/terms-and-conditions':
            this.currentStep = 1;
            this.title = 'الشروط والأحكام';
            break;
          case '/personal-information':
            this.currentStep = 2;
            this.title = 'المعلومات الشخصية';
            break;
          case '/cameras-details':
            this.currentStep = 3;
            this.title = 'أنواع الكاميرات وأعدادها';
            break;
          case '/payment':
            this.currentStep = 4;
            this.title = 'الدفع';
            break;
          case '/final-contract':
            this.currentStep = 5;
            this.title = 'العقد الإلكتروني';
            break;
        }
      }
    });
  }
}
