// src/app/services/language.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject = new BehaviorSubject<string>(localStorage.getItem('lang') || 'ar');
  currentLang = this.langSubject.asObservable();

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.langSubject.next(lang);
  }

  getLang(): string {
    return localStorage.getItem('lang') || 'ar';
  }
}
