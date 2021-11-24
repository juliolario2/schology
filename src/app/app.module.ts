import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoGruposComponent } from './curso-grupos/curso-grupos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BarradenavegacionComponent } from './barradenavegacion/barradenavegacion.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import {MenuSchologyModule} from "./menu-schology/menu-schology.module";
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { OcultarmostrarComponent } from './ocultarmostrar/ocultarmostrar.component';

@NgModule({
    declarations: [
        AppComponent,
        CursoGruposComponent,
        BuscarComponent,
        BarradenavegacionComponent,
        CarruselComponent,
        PiedepaginaComponent,
        DatospersonalesComponent,
        DetalleproductoComponent,
        OcultarmostrarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuSchologyModule
    ],
    providers: [],
    exports: [
        CarruselComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
