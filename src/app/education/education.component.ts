import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
Education : Array<any> = [];
ngOnInit() : void {
  let education1 = {
    fecha: "2024-02-09",
    ubicacion: "cordoba ver",
    puesto: "CEO",
    empresa: "Haidope",
    logros: [
      
      {descripcion : "La educacion es  uy importante"},
      {descripcion: "La educacion esta buena"}
    ]
  };

  let education2 = {
    fecha: "2024-02-09",
    ubicacion: "cordoba ver",
    puesto: "CEO",
    empresa: "Haidope",
    logros: [
      
      {descripcion : "Escuela universitaria UV"},
      {descripcion: "Escuela BUAP"}

    ]
  };

  this.Education.push(education1);
  this.Education.push(education2);
  console.log(this.Education);
}

}
