import { Time } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  public cliente:any=[]
  public restaurante:any=[]

  f:string
  h:string
  //fh:string

  constructor(private Ws:WsJeeService, private builder:FormBuilder) { }

  ngOnInit(): void {
    this.formularioRa = this.builder.group({
      cedula: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]*")])],
      nombreR: ['', Validators.compose([Validators.required])],
      fecha:['', Validators.required],
      hora:['', Validators.required],
      numPer:['', Validators.compose([Validators.required])]
    })

    this.formularioRa.get('cedula')?.valueChanges.subscribe(se => {
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
    this.formularioRa.get('fecha', )?.valueChanges.subscribe(fe => {
      this.f = fe
      //this.fh = this.f+this.h
      //console.log(this.f)
      //console.log(this.fh)
    })

    this.formularioRa.get('hora')?.valueChanges.subscribe(ho => {
      this.h = ho
      //this.fh = this.f+this.h
      //console.log(this.fh)
    })
  }

  getC(ced:string){
    let usuarioExiste = false
    let c = new URLSearchParams()
    c.set('cedula', ced)
    this.Ws.getCliente(c).subscribe((res) => {
      usuarioExiste = true
      this.validador = usuarioExiste
      this.cliente = res
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
      this.restaurante = res
      this.numP_D = parseInt(res.numAforo)
      console.log(res)
    },(error) => {
      restauranteExiste = false
      this.validadorR = restauranteExiste
      console.log(error)
    })
  }

  regRa(values:any){
    let ra = new URLSearchParams()
    this.f = this.formularioRa.value.fecha
    this.h = this.formularioRa.value.hora
    ra.set("cedula", this.formularioRa.value.cedula)
    ra.set("nombreR", this.formularioRa.value.nombreR)
    ra.set("fh", this.f+ " " +this.h)
    ra.set("numP", this.formularioRa.value.numPer)
    
    //console.log(this.f+this.h)

    this.Ws.addReserva(ra).subscribe((res:any) => {
      alert(res['estado'])
      this.formularioRa.reset()
    })
  }
}
