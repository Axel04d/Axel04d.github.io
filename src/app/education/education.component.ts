import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  Education: Array<any> = [];
  ngOnInit(): void {
    let education1 = {
      fecha: "2024",
      ubicacion: "Cordoba",
      puesto: "Estudiante",
      empresa: "UV",
      logros: [
        {
          descripcion: "Cursar 3er semestre de la carrera"
        },
        { descripcion: "Creacion del primer proyecto de la empresa " }
      ]
    };

    let education2 = {
      fecha: "2024",
      ubicacion: "Cordoba",
      puesto: "Estudiante",
      empresa: "UV",
      logros: [
        {
          descripcion: "Cursacion de 5to semestre"
        },
        { descripcion: "Iniciacion del proyecto " }
      ]
    };

    this.Education.push(education1);
    this.Education.push(education2);
    console.log(this.Education);

  }
}



