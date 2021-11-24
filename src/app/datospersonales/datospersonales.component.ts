import { Component, OnInit } from '@angular/core';
import {DatospersonalesService} from "../servicios/datospersonales.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.scss']
})
export class DatospersonalesComponent implements OnInit {

  arreglodatos:any ={};
  constructor(private datoservice : DatospersonalesService, private ruta: Router) {
  this.arreglodatos = this.datoservice.obtenerdato();
  }

  ngOnInit(): void {
  }
  muestra(id:number){this.ruta.navigate((['/detalles',id]))}

}
export interface Datosinterface{
  Nombre:string;
  foto:string;
  Sueldo:string;
  Telefono:number;
}
