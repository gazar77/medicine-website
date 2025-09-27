import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-heart-tips',
  standalone: false,
  templateUrl: './heart-tips.component.html',
  styleUrls: ['./heart-tips.component.css']
})
export class HeartTipsComponent implements OnInit {
  selectedLang: 'ar' | 'en' = 'ar';

  tips = {
    ar: {
      lifestyle: [
        'مارس النشاط البدني بانتظام (مثل المشي 30 دقيقة يوميًا).',
        'حافظ على وزن صحي.',
        'مارس تمارين الاسترخاء أو التأمل لتقليل التوتر.',
        'توقف عن التدخين فورًا.'
      ],
      nutrition: [
        'اتبع نظام غذائي صحي (خضار، فواكه، حبوب كاملة، بروتين خفيف).',
        'قلل الملح لتجنب ارتفاع ضغط الدم.',
        'تجنب الدهون المشبعة والمقلية.',
        'اشرب كمية كافية من الماء.',
        'قلل المشروبات الغازية والسكريات.'
      ],
      dailyHabits: [
        'مارس الهوايات التي تحبها لتخفيف الضغط النفسي.',
        'قلل الكافيين (شاي/قهوة).',
        'قلل الجلوس لفترات طويلة.',
        'مارس الرياضة اليومية (المشي، ركوب الدراجة).',
        'اختر الدهون الصحية مثل زيت الزيتون والمكسرات.'
      ],
      checkups: [
        'افحص ضغط الدم والكوليسترول والسكر بانتظام.',
        'تابع الفحوصات الطبية خاصة لو عندك تاريخ عائلي مع أمراض القلب.',
        'التزم بالأدوية الموصوفة من الطبيب.'
      ],
      warningSigns: [
        'ألم في الصدر، ضيق تنفس، دوخة، خفقان.',
        'لا تهمل الأعراض، واذهب للطبيب فورًا إذا ظهرت.'
      ]
    },
    en: {
      lifestyle: [
        'Exercise regularly (e.g., 30 minutes walking daily).',
        'Maintain a healthy weight.',
        'Practice relaxation or meditation to reduce stress.',
        'Quit smoking immediately.'
      ],
      nutrition: [
        'Follow a healthy diet (vegetables, fruits, whole grains, light protein).',
        'Reduce salt intake to prevent high blood pressure.',
        'Avoid saturated and fried fats.',
        'Drink enough water.',
        'Reduce soft drinks and sugars.'
      ],
      dailyHabits: [
        'Practice hobbies you enjoy to relieve stress.',
        'Reduce caffeine (tea/coffee).',
        'Limit prolonged sitting.',
        'Exercise daily (walking, cycling).',
        'Choose healthy fats like olive oil and nuts.'
      ],
      checkups: [
        'Check blood pressure, cholesterol, and sugar regularly.',
        'Follow medical check-ups especially if you have a family history of heart disease.',
        'Follow prescribed medications.'
      ],
      warningSigns: [
        'Chest pain, shortness of breath, dizziness, palpitations.',
        'Do not ignore symptoms; see a doctor immediately if they appear.'
      ]
    }
  };

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.selectedLang = this.langService.getLang() as 'ar' | 'en';

    this.langService.currentLang.subscribe(lang => {
      this.selectedLang = lang as 'ar' | 'en';
    });
  }
}
