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
      title: 'عن المشروع',
      lead: 'هذا المشروع يهدف إلى توعية الناس بأمراض القلب والأوعية الدموية وتقديم نصائح للوقاية منها، من خلال محتوى طبي مبسط وسهل الفهم.',
      text: 'نحن نؤمن أن الوقاية خير من العلاج، وأن الفهم الصحيح لصحة القلب يساعد على حياة أطول وأكثر صحة.'
    },
    en: {
      title: 'About the Project',
      lead: 'This project aims to raise awareness about cardiovascular diseases and provide tips for prevention, through simple and easy-to-understand medical content.',
      text: 'We believe that prevention is better than cure, and a correct understanding of heart health helps for a longer and healthier life.'
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
