import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClienteResponse } from '../models/cliente';
import { ReservaResponse } from '../models/reserva';
import { Restaurante, RestauranteResponse } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {
  public Cliente:Observable<Cliente>

  constructor(private http : HttpClient) { }

  addCliente(cli:any):Observable<ClienteResponse>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post<ClienteResponse>("http://localhost:8080/ChuchucaArevalo-Gabriel-ExamenF/rest/cliente/registroC", cli, httpOptions)
  }

  addRestaurante(res:any):Observable<RestauranteResponse>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post<RestauranteResponse>("http://localhost:8080/ChuchucaArevalo-Gabriel-ExamenF/rest/restaurante/registroR", res, httpOptions)
  }

  addReserva(rese:any):Observable<ReservaResponse>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post<ReservaResponse>("http://localhost:8080/ChuchucaArevalo-Gabriel-ExamenF/rest/reserva/registroRa", rese, httpOptions)

  }

  getCliente(nomap:any):Observable<Cliente>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post<Cliente>('http://localhost:8080/ChuchucaArevalo-Gabriel-ExamenF/rest/cliente/clienteFind', nomap, httpOptions)
  }

  getRestaurante(nomap:any):Observable<Restaurante>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post<Restaurante>('http://localhost:8080/ChuchucaArevalo-Gabriel-ExamenF/rest/restaurante/restauranteB', nomap, httpOptions)
  }

  getClientes(){
    return this.http.get("http://localhost:8080/ChuchucaArevalo-Gabriel-ExamenF/rest/cliente/clienteBAll")
  }



  //http://localhost:8080/ChuchucaArevalo-Gabriel-ExamenF/rest/cliente/clienteB
}
