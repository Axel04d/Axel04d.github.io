import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguajesComponent } from './languajes/languajes.component';
import { InterestComponent } from './interest/interest.component';
import { AchivamentsComponent } from './achivaments/achivaments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, WorkExperienceComponent,EducationComponent,SkillsComponent,LanguajesComponent,InterestComponent,AchivamentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mycv';
}
