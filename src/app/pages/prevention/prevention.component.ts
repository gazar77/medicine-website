import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-prevention',
  standalone: false,
  templateUrl: './prevention.component.html',
  styleUrl: './prevention.component.css'
})
export class PreventionComponent implements OnInit {
  lang: string = 'ar';

  preventionItems = [
    {
      titleAr: 'نظام غذائي صحي',
      titleEn: 'Healthy Diet',
      descAr: 'تناول الخضروات، الفواكه، وتجنب الدهون المشبعة والسكريات.',
      descEn: 'Eat vegetables, fruits, and avoid saturated fats and sugars.'
    },
    {
      titleAr: 'ممارسة الرياضة',
      titleEn: 'Exercise',
      descAr: 'التمارين اليومية مثل المشي أو الجري تحسن صحة القلب.',
      descEn: 'Daily exercises like walking or running improve heart health.'
    },
    {
      titleAr: 'تجنب التدخين',
      titleEn: 'Avoid Smoking',
      descAr: 'الإقلاع عن التدخين يقلل بشكل كبير من خطر أمراض القلب.',
      descEn: 'Quitting smoking greatly reduces the risk of heart diseases.'
    }
  ];

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.currentLang.subscribe(lang => this.lang = lang);
  }
}
