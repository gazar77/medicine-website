import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-prevention',
  standalone: false,
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.css'] // صححتها
})
export class PreventionComponent implements OnInit {
  lang: string = 'ar';

  preventionItems = [
    {
      titleAr: 'نظام غذائي صحي',
      titleEn: 'Healthy Diet',
      descAr: 'تناول الخضروات، الفواكه، وتجنب الدهون المشبعة والسكريات.',
      descEn: 'Eat vegetables, fruits, and avoid saturated fats and sugars.',
      linkAr: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
      linkEn: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet'
    },
    {
      titleAr: 'ممارسة الرياضة',
      titleEn: 'Exercise',
      descAr: 'التمارين اليومية مثل المشي أو الجري تحسن صحة القلب.',
      descEn: 'Daily exercises like walking or running improve heart health.',
      linkAr: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
      linkEn: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'
    },
    {
      titleAr: 'تجنب التدخين',
      titleEn: 'Avoid Smoking',
      descAr: 'الإقلاع عن التدخين يقلل بشكل كبير من خطر أمراض القلب.',
      descEn: 'Quitting smoking greatly reduces the risk of heart diseases.',
      linkAr: 'https://www.cdc.gov/tobacco/quit_smoking/index.htm',
      linkEn: 'https://www.cdc.gov/tobacco/quit_smoking/index.htm'
    }
  ];

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.currentLang.subscribe(lang => this.lang = lang);
  }

  getTitle(item: any) {
    return this.lang === 'ar' ? item.titleAr : item.titleEn;
  }

  getDesc(item: any) {
    return this.lang === 'ar' ? item.descAr : item.descEn;
  }

  getLink(item: any) {
    return this.lang === 'ar' ? item.linkAr : item.linkEn;
  }
}
