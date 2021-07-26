import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-registroreserva',
  templateUrl: './registroreserva.component.html',
  styleUrls: ['./registroreserva.component.css']
})
export class RegistroreservaComponent implements OnInit {
  formularioRa:FormGroup
  public validador:boolean
  public validadorR:boolean
  numP_D:number = 0
  value:Date = new Date(1970, 0, 1, 14, 57, 0)
  


  constructor(private Ws:WsJeeService, private builder:FormBuilder) { }

  ngOnInit(): void {
    this.formularioRa = this.builder.group({
      nombreC: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*")])],
      nombreR: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*")])],
      numPer:['', Validators.compose([Validators.required])]
    })

    this.formularioRa.get('nombreC')?.valueChanges.subscribe(se => {
      try{
        this.getC(se)
      }catch(e){
      }
    })

    this.formularioRa.get('nombreR')?.valueChanges.subscribe(re => {
      try{
        this.getR(re)
      }catch(e){
      }
    })


  }


  getC(nom:string){
    let usuarioExiste = false
    let c = new URLSearchParams()
    c.set('nombres', nom)
    this.Ws.getCliente(c).subscribe((res) => {
      usuarioExiste = true
      this.validador = usuarioExiste
      console.log(res)
    },(error) => {
      usuarioExiste = false
      this.validador = usuarioExiste
      console.log(error)
    })
  }

  getR(nomr:string){
    let restauranteExiste = false
    let c = new URLSearchParams()
    c.set('nombre', nomr)
    this.Ws.getRestaurante(c).subscribe((res) => {
      restauranteExiste = true
      this.validadorR = restauranteExiste
      this.numP_D = parseInt(res.numAforo)
      console.log(res)
    },(error) => {
      restauranteExiste = false
      this.validadorR = restauranteExiste
      console.log(error)
    })
  }

  regRa(vaules:any){
    let ra = new URLSearchParams()
    ra.set("nombreC", this.formularioRa.value.nombreC)
    ra.set("nombreR", this.formularioRa.value.nombreR)
    ra.set("numP", this.formularioRa.value.numPer)

    this.Ws.addReserva(ra).subscribe((res:any) => {
      alert(res['estado'])
      this.formularioRa.reset()
    })
  }
}
