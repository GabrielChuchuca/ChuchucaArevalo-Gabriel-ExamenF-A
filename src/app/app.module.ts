import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroclienteComponent } from './components/registrocliente/registrocliente.component';
import { RegistrorestauranteComponent } from './components/registrorestaurante/registrorestaurante.component';
import { WsJeeService } from './services/ws-jee.service';
import { IndexComponent } from './components/index/index.component';
import { RegistroreservaComponent } from './components/registroreserva/registroreserva.component';
import { ListadoreservaComponent } from './components/listadoreserva/listadoreserva.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    RegistroclienteComponent,
    RegistrorestauranteComponent,
    IndexComponent,
    RegistroreservaComponent,
    ListadoreservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [WsJeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
