import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  lang: string = 'ar';

  stats = [
    { value: 17900000, label: 'حالات وفاة سنويًا بسبب أمراض القلب', labelEn: 'Annual deaths due to cardiovascular diseases', suffix: '' },
    { value: 80, label: 'يمكن الوقاية من معظم الحالات', labelEn: 'Most cases can be prevented', suffix: '%' },
    { value: 1, label: 'السبب الأول عالميًا للوفاة', labelEn: 'Leading cause of death globally', prefix: '#' },
  ];

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
  this.lang = this.langService.getLang();
  this.langService.currentLang.subscribe(lang => this.lang = lang);
}

}
