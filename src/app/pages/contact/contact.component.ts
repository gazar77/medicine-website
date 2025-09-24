import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  formSubmitted = false;

  texts = {
    ar: {
      title: 'تواصل معنا',
      namePlaceholder: 'اكتب اسمك هنا',
      emailPlaceholder: 'example@email.com',
      messagePlaceholder: 'اكتب رسالتك هنا',
      submitBtn: 'إرسال',
      successMsg: '✅ تم إرسال رسالتك بنجاح!'
    },
    en: {
      title: 'Contact Us',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'example@email.com',
      messagePlaceholder: 'Enter your message',
      submitBtn: 'Send',
      successMsg: '✅ Your message has been sent successfully!'
    }
  };

  currentText = this.texts['ar'];

  constructor(public langService: LanguageService) {}

  ngOnInit() {
    // ضبط النصوص حسب اللغة الحالية
    this.updateText(this.langService.getLang());

    // متابعة أي تغييرات للغة من الـ Navbar
    this.langService.currentLang.subscribe(lang => {
      this.updateText(lang);
    });
  }

 updateText(lang: string) {
  const key = lang as 'ar' | 'en';
  this.currentText = this.texts[key];
}

  onSubmit(form: any) {
    if (form.valid) {
      this.formSubmitted = true;
      form.reset();
      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000);
    }
  }
}
