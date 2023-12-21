import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss',
})
export class TermsAndConditionsComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  items = [
    {
      id: 1,
      title:
        'العقد إلكتروني، ويتم إصداره بخطوة واحدة بعد دفع العقد ويمكن التحقق منه من خلال QR.',
    },
    {
      id: 2,
      title:
        'ويكون العميل أو الطرف الثاني مسؤولاً عن البيانات المدخلة في العقد.',
    },
    {
      id: 3,
      title:
        'تم إصدار العقد من قبل منشأة مرخصة لتقديم خدمة الصيانة للجهات الأمنية من قبل الهيئة العليا للأمن الصناعي.',
    },
    {
      id: 4,
      title: 'لا يمكن طلب استرداد الأموال إذا تمت طباعة العقد أو تحميل العقد.',
    },
    { id: 5, title: 'ستكون هناك رسوم إضافية إذا طلب العميل الزيارة.' },
  ];

  agreementForm = this.fb.group({
    termsAndConditions: ['', Validators.requiredTrue],
    privacyPolicy: ['', Validators.requiredTrue],
  });

  errorMessage: string | null = null;

  onSubmit() {
    if (!this.agreementForm.valid) {
      this.errorMessage =
        'برجاء الموافقة أولاً على اتفاقية الشروط والأحكام وسياسة الخصوصية';
    } else {
      this.router.navigateByUrl('/personal-information');
    }
  }
}
