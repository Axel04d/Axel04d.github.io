import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills: string[] = [
    'Thinking through first principles',
    'Marketing',
    'Micromanagement',
    'Goal oriented',
    'Resiliency',
    'Future focused',
    'Leadership',
    'Creativity',
    'Time Management',
    'Persistence',
    'Turning ideas into companies',
    'Long-term thinking'
  ];
  
}
