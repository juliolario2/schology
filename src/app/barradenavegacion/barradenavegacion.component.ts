import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-barradenavegacion',
  templateUrl: './barradenavegacion.component.html',
  styleUrls: ['./barradenavegacion.component.scss']
})
export class BarradenavegacionComponent implements OnInit {
  muestra = false;
  buscar(identificar: number){
this.ruta.navigate((['/detalles',identificar]))
  }
    constructor(private ruta: Router) { }

  ngOnInit(): void {


  }

}
