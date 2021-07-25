import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroclienteComponent } from './components/registrocliente/registrocliente.component';
import { RegistrorestauranteComponent } from './components/registrorestaurante/registrorestaurante.component';
import { WsJeeService } from './services/ws-jee.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroclienteComponent,
    RegistrorestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule
  ],
  providers: [WsJeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
