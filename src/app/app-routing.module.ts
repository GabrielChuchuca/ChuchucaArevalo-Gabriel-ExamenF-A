import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ListadoreservaComponent } from './components/listadoreserva/listadoreserva.component';
import { RegistroclienteComponent } from './components/registrocliente/registrocliente.component';
import { RegistroreservaComponent } from './components/registroreserva/registroreserva.component';
import { RegistrorestauranteComponent } from './components/registrorestaurante/registrorestaurante.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'registroC', component: RegistroclienteComponent },
  { path: 'registroRe', component: RegistrorestauranteComponent },
  { path: 'registroRa', component: RegistroreservaComponent },
  { path: 'listadoRa', component: ListadoreservaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
