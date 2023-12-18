import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
})
export class WhyChooseUsComponent {
  items = [
    {
      id: 'price',
      title: $localize`السعر أفضل من سعر السوق`,
      description: $localize`تقدم رؤية الأشياء دائما أفضل الأسعار مقارنة بالسوق المحلي والعالمي`,
    },
    {
      id: 'technical-support',
      title: $localize`تقديم الدعم الفني للمعدات التقنية`,
      description: $localize`كما نقدم الدعم الفني والمساعدة والزيارات لحل المشاكل`,
    },
    {
      id: 'supply',
      title: $localize`توريد المعدات التقنية الجديدة`,
      description: $localize`توفر شركة رؤية الأشياء حلولاً تقنية جديدة تمامًا وأفضل دائمًا`,
    },
    {
      id: 'solutions',
      title: $localize`تقديم الحلول التقنية المناسبة`,
      description: $localize`نحن دائمًا نختار ونوصي بالاختيار الأفضل والحلول المناسبة لعملائنا`,
    },
    {
      id: 'experience',
      title: $localize`خبرة الشركة في المجال التقني`,
      description: $localize`تتمتع الشركة بالخبرة الكافية في مجالات تكنولوجيا المعلومات على أيدي مهندسينا`,
    },
  ];
}
