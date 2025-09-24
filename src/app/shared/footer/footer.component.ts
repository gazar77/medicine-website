import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  lang: string = 'ar';

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    // جلب اللغة الحالية
    this.lang = this.langService.getLang();

    // الاشتراك لأي تغييرات مستقبلية
    this.langService.currentLang.subscribe(lang => {
      this.lang = lang;
    });
  }
}
