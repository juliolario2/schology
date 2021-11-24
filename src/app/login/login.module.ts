import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperaComponent } from './recupera/recupera.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AccesoComponent,
    RegistroComponent,
    RecuperaComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
