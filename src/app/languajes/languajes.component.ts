import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-languajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languajes.component.html',
  styleUrl: './languajes.component.css'
})
export class LanguajesComponent {
  languages: string[] = ['Español', 'English', 'Français'];

}
