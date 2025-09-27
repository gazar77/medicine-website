import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  aboutTitle = '';
  aboutLead = '';
  aboutText = '';

  texts = {
    ar: {
      title: 'عن خمسة لصحتك',
      lead: 'خمسة لصحتك هي مبادرة توعوية تهدف إلى مساعدتك على اتباع 5 عادات يومية بسيطة للحفاظ على صحتك العامة وصحة قلبك.',
      text: 'نركز على التوعية بأهمية الغذاء الصحي، النشاط البدني المنتظم، النوم الجيد، الصحة النفسية، والمتابعة الطبية الدورية. نحن نؤمن أن صحتك هي استثمارك الحقيقي، وأن اتباع هذه العادات يحافظ على قلبك وحياتك.'
    },
    en: {
      title: 'About "5 for Your Health"',
      lead: '"5 for Your Health" is an awareness initiative that helps you follow 5 simple daily habits to maintain your overall health and heart health.',
      text: 'We focus on raising awareness about healthy nutrition, regular physical activity, good sleep, mental health, and periodic medical check-ups. We believe your health is your true investment, and following these habits keeps your heart and life strong.'
    }
  };

  constructor(public langService: LanguageService) {}

  ngOnInit() {
    this.updateText(this.langService.getLang());

    // متابعة أي تغييرات للغة أثناء التصفح
    this.langService.currentLang.subscribe(lang => {
      this.updateText(lang);
    });
  }

  updateText(lang: string) {
    const key = lang as 'ar' | 'en';
    this.aboutTitle = this.texts[key].title;
    this.aboutLead = this.texts[key].lead;
    this.aboutText = this.texts[key].text;
  }
}
