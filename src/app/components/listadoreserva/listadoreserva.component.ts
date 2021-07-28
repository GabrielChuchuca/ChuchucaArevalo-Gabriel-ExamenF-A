import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-listadoreserva',
  templateUrl: './listadoreserva.component.html',
  styleUrls: ['./listadoreserva.component.css']
})
export class ListadoreservaComponent implements OnInit {
  formularioLRa:FormGroup
  public validador:boolean
  public validadorR:boolean
  public v:boolean = false
  private v1:boolean = false
  public reservas:any = []
  p:string = "2021-08-28T17:00:00-05:00[America/Bogota]"

  constructor(private Ws:WsJeeService, private builder:FormBuilder) { }

  ngOnInit(): void {
    this.Ws.getReservas().subscribe((response) => {
      this.reservas = response
      console.log(this.reservas)
    },(error:any) =>{
      console.log(error)
    })

    this.formularioLRa = this.builder.group({
      cednom: ['', Validators.compose([Validators.required])],
      fecha: ['', Validators.compose([Validators.required])]
    })
    
    this.formularioLRa.get('cednom')?.valueChanges.subscribe(se => {
      //console.log(se)
      this.v=this.getC(se)
      this.v1=this.getR(se)
      if(this.v==true && this.v1==false){
        console.log("Usuario encontrado, pero resturante no encontrado")
      }else if(this.v==false && this.v1==true){
        console.log("Restaurante encontrado, pero cliente no encontrado")
      }
    })

    this.formularioLRa.get('fecha')?.valueChanges.subscribe(f => {
      console.log(f)
    })
  }

  getC(ced:string):boolean{
    let usuarioExiste = false
    let c = new URLSearchParams()
    c.set('cedula', ced)
    this.Ws.getCliente(c).subscribe((res) => {
      usuarioExiste = true
      this.validador = usuarioExiste
      console.log(res)
      //return this.validador
    },(error) => {
      usuarioExiste = false
      this.validador = usuarioExiste
      console.log(error)
      //return this.validador

    })
    return this.validador
  }

  getR(nomr:string):boolean{
    let restauranteExiste = false
    let c = new URLSearchParams()
    c.set('nombre', nomr)
    this.Ws.getRestaurante(c).subscribe((res) => {
      restauranteExiste = true
      this.validadorR = restauranteExiste
      console.log(res)
    },(error) => {
      restauranteExiste = false
      this.validadorR = restauranteExiste
      console.log(error)
    })
    return this.validadorR
  }


}
