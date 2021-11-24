import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from "./registro/registro.component";
import {ErrorComponent} from "./error/error.component";
import {RecuperaComponent} from "./recupera/recupera.component";

const routes: Routes = [
  {path:'',
  children:[
    {path:'Registro',component:RegistroComponent},
    {path:'Recupera',component:RecuperaComponent},
    {path:'error',component:ErrorComponent},
    {path:'**',pathMatch:'full', redirectTo: 'error'},

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

