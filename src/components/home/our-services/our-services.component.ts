import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
  services = [
    {
      id: 'research',
      title: $localize`البحث والتطوير`,
      description: $localize`تعمل الشركة على تقديم أحدث الحلول التقنية من خلال البحث والتطوير في المجالات التالية: الذكاء الاصطناعي ورؤية الكمبيوتر والروبوتات والواقع المعزز وانترنت الأشياء.`,
    },
    {
      id: 'network',
      title: $localize`حلول الشبكات`,
      description: $localize`تصميم امتداد الشبكة هو عملية تخطيط وتنفيذ نظام شبكة جديد أو محدث. وهذا يشمل تحديد احتياجات العمل`,
    },
    {
      id: 'business',
      title: $localize`حلول الأعمال`,
      description: $localize`إنشاء المواقع الإلكترونية والحلول التقنية لتسهيل عمليات إدارة الأعمال وجعلها أكثر احترافية إدارياً`,
    },
  ];
}
