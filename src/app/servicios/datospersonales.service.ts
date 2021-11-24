import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatospersonalesService {
arreglodatos:any [] =[
  {
    id:'1',
    Nombre: 'Carlos',
    Titulo:'Contador',
    foto:'./assets/persona1.jpg',
    Sueldo:'$20,000',
    Telefono: 55443322
  } ,
  {
    id:'2',
    Nombre: 'Zuri',
    Titulo: 'Computo',
    foto:'./assets/persona2.jpg',
    Sueldo:'$10,000',
    Telefono:22334455
  },
  {
    id:'3',
    Nombre: 'Sonia',
    Titulo:'Programacion',
    foto:'./assets/persona3.jpg',
    Sueldo:'$25,000',
    Telefono:99887766
  },
  {
    id:'4',
    Nombre: 'Mari',
    Titulo: 'Estadistica',
    foto:'./assets/persona4.jpg',
    Sueldo:'$30,000',
    Telefono:66775544
  },
  {
    id:'5',
    Nombre: 'Pepe',
    Titulo:'Fisica',
    foto:'./assets/persona5.jpg',
    Sueldo:'$35,000',
    Telefono:33446688  }

  ];
  constructor() { }
  obtenerdato(): any {
    return this.arreglodatos;
  }
  obtenerdatoid(i: number): any {
    return this.arreglodatos[(i-1)];
  }
}
