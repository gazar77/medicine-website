import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-diseases',
  standalone: false,
  templateUrl: './diseases.component.html',
  styleUrl: './diseases.component.css'
})
export class DiseasesComponent implements OnInit {

  title = '';
  cards: { title: string; text: string; btn: string }[] = [];

  texts = {
    ar: {
      title: 'أمراض القلب الشائعة',
      cards: [
        { title: 'مرض الشريان التاجي', text: 'انسداد أو تضيق الشرايين التاجية بسبب ترسب الدهون والكوليسترول.', btn: 'اعرف المزيد' },
        { title: 'فشل القلب', text: 'حالة يكون فيها القلب غير قادر على ضخ الدم بشكل كافٍ للجسم.', btn: 'اعرف المزيد' },
        { title: 'اضطراب ضربات القلب', text: 'مشاكل في سرعة أو انتظام نبض القلب تؤثر على عمله الطبيعي.', btn: 'اعرف المزيد' }
      ]
    },
    en: {
      title: 'Common Heart Diseases',
      cards: [
        { title: 'Coronary Artery Disease', text: 'Blockage or narrowing of the coronary arteries due to fat and cholesterol deposits.', btn: 'Learn More' },
        { title: 'Heart Failure', text: 'A condition in which the heart is unable to pump blood sufficiently to the body.', btn: 'Learn More' },
        { title: 'Arrhythmia', text: 'Problems with heart rate or rhythm affecting its normal function.', btn: 'Learn More' }
      ]
    }
  };

  constructor(public langService: LanguageService) {}

  ngOnInit() {
    this.updateText(this.langService.getLang());

    // متابعة أي تغييرات للغة من الـ Navbar
    this.langService.currentLang.subscribe(lang => {
      this.updateText(lang);
    });
  }

updateText(lang: string) {
  const key = lang as 'ar' | 'en';
  this.title = this.texts[key].title;
  this.cards = this.texts[key].cards;
}

}
