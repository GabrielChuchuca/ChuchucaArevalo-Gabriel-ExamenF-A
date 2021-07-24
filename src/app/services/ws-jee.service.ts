import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClienteResponse } from '../models/cliente';

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
}
