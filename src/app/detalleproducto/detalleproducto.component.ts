import { Component, OnInit } from '@angular/core';
import {DatospersonalesService} from "../servicios/datospersonales.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.scss']
})


export class DetalleproductoComponent implements OnInit {

  arreglodatos: any = {

  };
  constructor (private datoservice : DatospersonalesService, private ruta: Router, private rutaactiva: ActivatedRoute) {

  }

  ngOnInit(): void {
this.rutaactiva.params.subscribe(params => {
  console.log(params.id);
  this.arreglodatos = this.datoservice.obtenerdatoid(params.id);
console.log(this.arreglodatos.id)

})

  }
  muestra(id: number){
        this.ruta.navigate((['/detalles', id]))}
}
