import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { DatosComponent } from './datos/datos.component';


const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  {path:'ingresar', component: UsuarioComponent, children:[
    {path:'editar', component: DatosComponent},
  ]},
  {path:'editar', component: DatosComponent},
  { path: '**', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
