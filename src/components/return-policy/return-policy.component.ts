import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-return-policy',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.scss',
})
export class ReturnPolicyComponent {
  items = [
    {
      id: 1,
      icon: 'assets/images/return_policy/1.png',
      title: $localize`تعليمات الكاميرات المباعة`,
      points: [
        $localize`يجب أن تكون الكاميرات المراقبة التي ترغب في استبدالها أو استرجاعها في حالتها الأصلية وغير مستخدمة أو معيبة أو مخالفة للمواصفات القياسية السعودية أو للمعلومات التي تم تزويدك بها عند الشراء.`,
        $localize`يجب أن تقوم بإرجاع الكاميرات المراقبة مع جميع ملحقاتها والعبوة الأصلية والفاتورة ووثيقة الضمان إن وجدت.`,
        $localize`يجب أن تقوم بإرجاع الكاميرات المراقبة خلال 7 أيام من تاريخ استلامها، ما لم يتم تحديد مدة أطول في وصف المنتج أو في سياسة الموقع.`,
      ],
    },
    {
      id: 2,
      icon: 'assets/images/return_policy/2.png',
      title: $localize`تعليمات الكاميرات المباعة`,
      points: [
        $localize`يمكنك اختيار استبدال الكاميرات المراقبة بمنتجات أخرى متوفرة في موقعنا بنفس القيمة أو أعلى، وفي هذه الحالة سيتم خصم الفرق من رصيدك أو طلبه منك عند التسليم.`,
        $localize`يمكنك اختيار استرجاع الكاميرات المراقبة واسترداد المبلغ الذي دفعته عن طريق نفس وسيلة الدفع التي استخدمتها عند الشراء، أو عن طريق تحويل بنكي إلى حسابك، أو عن طريق إضافة رصيد إلى حسابك في موقعنا.`,
        $localize`سيتم استرداد المبلغ خلال 14 يومًا من تاريخ استلامنا للكاميرات المراقبة المرتجعة، ما لم يتم تحديد مدة أقصر في وصف المنتج أو في سياسة الموقع.`,
        $localize`سيتم خصم رسوم الشحن والتوصيل من المبلغ المسترد، إلا إذا كان سبب الاسترجاع هو خطأ من جانبنا أو عيب في المنتج أو مخالفة للمواصفات. لا يمكن استبدال أو استرجاع الكاميرات المراقبة التي تم تخصيصها أو تعديلها حسب طلبك، أو التي تم فتحها أو تركيبها أو تشغيلها بطريقة غير صحيحة أو تسببت في تلفها.`,
      ],
    },
  ];
}
