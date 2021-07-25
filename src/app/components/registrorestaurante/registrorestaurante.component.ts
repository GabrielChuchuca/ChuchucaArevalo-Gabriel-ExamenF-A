import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurante } from 'src/app/models/restaurante';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-registrorestaurante',
  templateUrl: './registrorestaurante.component.html',
  styleUrls: ['./registrorestaurante.component.css']
})
export class RegistrorestauranteComponent implements OnInit {
  formularioRe :FormGroup

  constructor(private Ws:WsJeeService, private builder:FormBuilder) { }

  ngOnInit(): void {
    this.formularioRe = this.builder.group({
      nombre: ['', Validators.compose([Validators.required])],
      direccion: ['', Validators.compose([Validators.required])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      numAforo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])]
    })
  }

  regRe(values:any):void{
    let rest: Restaurante
    rest = {nombre:"nombre", direccion:"direccion", telefono:"telefono", numAforo:"numAforo"}
    let re = new URLSearchParams()
    re.set(rest.nombre, this.formularioRe.value.nombre)
    re.set(rest.direccion, this.formularioRe.value.direccion)
    re.set(rest.telefono, this.formularioRe.value.telefono)
    re.set(rest.numAforo, this.formularioRe.value.numAforo)

    this.Ws.addRestaurante(re).subscribe((res:any) => {
      alert(res['estado'])
      this.formularioRe.reset()
    })
  }

}
