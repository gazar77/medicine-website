import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-diseases',
  standalone: false,
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  title = '';
  generalCards: { title: string; text: string; btn: string; link: string }[] = [];
  heartCards: { title: string; text: string; btn: string; link: string }[] = [];

  texts = {
    ar: {
      title: 'الصحة العامة',
      general: [
        { title: 'التغذية الصحية', text: 'تناول وجبات متوازنة تحتوي على جميع العناصر الغذائية الأساسية.', btn: 'اعرف المزيد', link: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet' },
        { title: 'النشاط البدني', text: 'مارس التمارين الرياضية بانتظام للحفاظ على اللياقة والصحة.', btn: 'اعرف المزيد', link: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' },
        { title: 'النوم الجيد', text: 'احرص على النوم الكافي للحفاظ على صحة الجسم والعقل.', btn: 'اعرف المزيد', link: 'https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need' }
      ],
      heart: [
        { title: 'مرض الشريان التاجي', text: 'انسداد أو تضيق الشرايين التاجية بسبب ترسب الدهون والكوليسترول.', btn: 'اعرف المزيد', link: 'https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118' },
        { title: 'فشل القلب', text: 'حالة يكون فيها القلب غير قادر على ضخ الدم بشكل كافٍ للجسم.', btn: 'اعرف المزيد', link: 'https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142' },
        { title: 'اضطراب ضربات القلب', text: 'مشاكل في سرعة أو انتظام نبض القلب تؤثر على عمله الطبيعي.', btn: 'اعرف المزيد', link: 'https://www.mayoclinic.org/diseases-conditions/arrhythmia/symptoms-causes/syc-20350668' }
      ]
    },
    en: {
      title: 'General Health',
      general: [
        { title: 'Healthy Nutrition', text: 'Eat balanced meals containing all essential nutrients.', btn: 'Learn More', link: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet' },
        { title: 'Physical Activity', text: 'Exercise regularly to maintain fitness and health.', btn: 'Learn More', link: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' },
        { title: 'Good Sleep', text: 'Ensure enough sleep to maintain body and mind health.', btn: 'Learn More', link: 'https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need' }
      ],
      heart: [
        { title: 'Coronary Artery Disease', text: 'Blockage or narrowing of the coronary arteries due to fat and cholesterol deposits.', btn: 'Learn More', link: 'https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118' },
        { title: 'Heart Failure', text: 'A condition in which the heart is unable to pump blood sufficiently to the body.', btn: 'Learn More', link: 'https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142' },
        { title: 'Arrhythmia', text: 'Problems with heart rate or rhythm affecting its normal function.', btn: 'Learn More', link: 'https://www.mayoclinic.org/diseases-conditions/arrhythmia/symptoms-causes/syc-20350668' }
      ]
    }
  };

  constructor(public langService: LanguageService) {}

  ngOnInit() {
    this.updateText(this.langService.getLang());

    this.langService.currentLang.subscribe(lang => {
      this.updateText(lang);
    });
  }

  updateText(lang: string) {
    const key = lang as 'ar' | 'en';
    this.title = this.texts[key].title;
    this.generalCards = this.texts[key].general;
    this.heartCards = this.texts[key].heart;
  }
}
