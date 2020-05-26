import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { DatosComponent } from './datos/datos.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { InformacionComponent } from './informacion/informacion.component';


const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  {path: 'login/buscar', component: MensajeComponent},
  {path: 'conocer', component:InformacionComponent },
  {path:'ingresar', component: UsuarioComponent, children:[
    {path:'editar', component: DatosComponent},
  ]},
  { path: 'ingresar/:id', component: UsuarioComponent},
  {path:'editar', component: DatosComponent},
  { path: '**', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
