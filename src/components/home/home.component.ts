import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContractNowComponent } from './contract-now/contract-now.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutCompanyComponent,
    OurServicesComponent,
    ContractNowComponent,
    WhyChooseUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
