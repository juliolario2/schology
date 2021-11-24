import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadrecienteComponent } from './actividadreciente/actividadreciente.component';
import { PanelcursosComponent } from './panelcursos/panelcursos.component';



@NgModule({
  declarations: [
    ActividadrecienteComponent,
    PanelcursosComponent
  ],
  exports: [
    PanelcursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuSchologyModule { }
