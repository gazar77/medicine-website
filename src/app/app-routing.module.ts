import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { PreventionComponent } from './pages/prevention/prevention.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'diseases', component: DiseasesComponent },
  { path: 'prevention', component: PreventionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
