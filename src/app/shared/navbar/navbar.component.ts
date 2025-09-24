import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  selectedLang: string = 'ar';

  labels: any = {};
  arLabels: any = {
    home: 'الرئيسية',
    about: 'عن المشروع',
    diseases: 'الأمراض',
    prevention: 'الوقاية',
    contact: 'تواصل معنا'
  };
  enLabels: any = {
    home: 'Home',
    about: 'About',
    diseases: 'Diseases',
    prevention: 'Prevention',
    contact: 'Contact'
  };

  constructor(private langService: LanguageService) { }

  ngOnInit(): void {
    this.selectedLang = this.langService.getLang();
    this.updateLabels();

    this.langService.currentLang.subscribe(lang => {
      this.selectedLang = lang;
      this.updateLabels();
    });
  }

  changeLang(lang: string) {
    this.langService.changeLang(lang);
  }

  updateLabels() {
    this.labels = this.selectedLang === 'en' ? this.enLabels : this.arLabels;
  }
}
