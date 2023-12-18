import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from '../components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from '../components/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from '../components/return-policy/return-policy.component';
import { DynamicContentComponent } from '../components/dynamic-content/dynamic-content.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'return-policy', component: ReturnPolicyComponent },
  { path: 'services/:id', component: DynamicContentComponent },
  { path: '**', redirectTo: 'home' },
];
