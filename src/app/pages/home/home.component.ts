import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Stat {
  value: number;
  label: string;
  labelEn: string;
  prefix?: string;
  suffix?: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang: string = 'ar';

  stats: Stat[] = [
    {
      value: 30,
      suffix: ' دقيقة',
      label: 'نشاط بدني يوميًا يقلل من خطر الأمراض المزمنة',
      labelEn: 'Daily physical activity reduces chronic disease risk'
    },
    {
      value: 70,
      suffix: '%',
      label: 'من صحتك يعتمد على أسلوب حياتك وتغذيتك',
      labelEn: 'of your health depends on lifestyle and nutrition'
    },
    {
      value: 8,
      suffix: ' ساعات',
      label: 'من النوم الجيد يعزز المناعة والطاقة',
      labelEn: 'hours of quality sleep boost immunity and energy'
    }
  ];

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.lang = this.langService.getLang();
    this.langService.currentLang.subscribe(lang => this.lang = lang);
  }
}
