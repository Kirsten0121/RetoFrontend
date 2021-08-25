import { ContactoComponent } from './components/contacto/contacto.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { AccountComponent } from './components/account/account.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'account',component: AccountComponent
  },
  {
    path:'transacciones',component: TransaccionesComponent
  },
  {
    path:'contacto',component: ContactoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
export const routingComponents = [AccountComponent, TransaccionesComponent,ContactoComponent]