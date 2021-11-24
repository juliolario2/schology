import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatospersonalesComponent} from "./datospersonales/datospersonales.component";
import {ActividadrecienteComponent} from "./menu-schology/actividadreciente/actividadreciente.component";
import {PanelcursosComponent} from "./menu-schology/panelcursos/panelcursos.component";
import {CarruselComponent} from "./carrusel/carrusel.component";
import {AccesoComponent} from "./login/acceso/acceso.component";
import {CursoGruposComponent} from "./curso-grupos/curso-grupos.component";
import {DetalleproductoComponent} from "./detalleproducto/detalleproducto.component";
import {ErrorComponent} from "./login/error/error.component";
import {OcultarmostrarComponent} from "./ocultarmostrar/ocultarmostrar.component";

const routes: Routes = [
  {path:'Datos', component:DatospersonalesComponent},
  {path:'ActRec', component:ActividadrecienteComponent},
  {path:'PanCur', component:PanelcursosComponent},
  {path:'Carr', component:CarruselComponent},
  {path:'Grup', component:CursoGruposComponent},
  {path:'Formulario', component:OcultarmostrarComponent},
  {path:'detalles/:id', component:DetalleproductoComponent},
  {path:'login', component:AccesoComponent,
  loadChildren:()=> import('./login/login.module').then(m => m.LoginModule)},
  {path:'error', component:ErrorComponent},
  {path:'**', pathMatch: 'full', redirectTo:'error'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
