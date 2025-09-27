import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent implements OnInit {

  selectedLang: string = 'ar';

  constructor(private langService: LanguageService) { }

  ngOnInit(): void {
    // جلب اللغة المحفوظة من الـ localStorage عند بداية التشغيل
    this.selectedLang = this.langService.getLang();

    // متابعة التغيير في اللغة
    this.langService.currentLang.subscribe(lang => {
      this.selectedLang = lang;
    });
  }

  // تغيير اللغة من الدروب داون
  changeLang(lang: string) {
    this.langService.changeLang(lang);
  }
}
