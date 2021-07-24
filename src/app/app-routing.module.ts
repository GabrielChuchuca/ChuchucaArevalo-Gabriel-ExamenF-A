import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroclienteComponent } from './components/registrocliente/registrocliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroclienteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
