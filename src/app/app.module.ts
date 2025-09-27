import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ أضفناها هنا

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { PreventionComponent } from './pages/prevention/prevention.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeartTipsComponent } from './heart-tips/heart-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DiseasesComponent,
    PreventionComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HeartTipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ✅ هنا كمان
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
