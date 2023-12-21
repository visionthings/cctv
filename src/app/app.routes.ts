import { Routes } from '@angular/router';
import { TermsAndConditionsComponent } from '../components/terms-and-conditions/terms-and-conditions.component';
import { PersonalInformationComponent } from '../components/personal-information/personal-information.component';
import { CamerasDetailsComponent } from '../components/cameras-details/cameras-details.component';
import { PaymentComponent } from '../components/payment/payment.component';
import { FinalContractComponent } from '../components/final-contract/final-contract.component';
import { PaymentRedirectComponent } from '../components/payment-redirect/payment-redirect.component';

export const routes: Routes = [
  { path: '', redirectTo: 'terms-and-conditions', pathMatch: 'full' },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'cameras-details', component: CamerasDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-redirect', component: PaymentRedirectComponent },
  { path: 'final-contract', component: FinalContractComponent },

  { path: '**', redirectTo: 'home' },
];
