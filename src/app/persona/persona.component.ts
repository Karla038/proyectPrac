import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre: string = 'Karla';
  apellido: string = 'Diaz';
  edad: number =20;

  //Para hacerlo de forma privada private edad: number =20;

  /* El método para que podamos ingresar a atributo edad
  getEdad(): number{
    return this.edad;
  }*/
}
