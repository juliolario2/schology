import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploradorrecursosComponent } from './exploradorrecursos/exploradorrecursos.component';
import { MisrecursosComponent } from './misrecursos/misrecursos.component';
import { DescripcionrecursosComponent } from './descripcionrecursos/descripcionrecursos.component';
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    ExploradorrecursosComponent,
    MisrecursosComponent,
    DescripcionrecursosComponent
  ],
    imports: [
        CommonModule,
        AppModule
    ]
})
export class MenurecursosModule { }
