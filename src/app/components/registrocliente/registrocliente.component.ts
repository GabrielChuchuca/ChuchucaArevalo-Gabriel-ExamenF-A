import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.component.html',
  styleUrls: ['./registrocliente.component.css']
})
export class RegistroclienteComponent implements OnInit {
  //public Cliente:Observable<Cliente>
  formularioC : FormGroup
  public validador:boolean

  constructor(private Ws : WsJeeService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.formularioC = this.builder.group({
      cedula: ['', Validators.compose([Validators.maxLength(10), Validators.required, Validators.pattern('[0-9]*')])],
      nombres: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*")])],
      apellidos: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*")])],
      correo: ['', Validators.compose([Validators.email, Validators.required])],
      direccion: ['', Validators.compose([Validators.required])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])]
    })

    this.formularioC.get('cedula')?.valueChanges.subscribe(se =>{
      try{
        this.validadorDeCedula(se)
      }catch(e){
      }
    })
  }

  validadorDeCedula(cedula:string) {
    let cedulaCorrecta = false;
    if (cedula.length == 10)
    {    
        let tercerDigito = parseInt(cedula.substring(2 , 3));
        if (tercerDigito < 6) {
            // El ultimo digito se lo considera dígito verificador
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
            let verificador = parseInt(cedula.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (cedula.length - 1); i++) {
                digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
                suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
            }
            suma= Math.round(suma);
            if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
                cedulaCorrecta = true;
            } else if ((10 - (Math.round(suma % 10))) == verificador) {
                cedulaCorrecta = true;
            } else {
                cedulaCorrecta = false;
            }
        } else {
            cedulaCorrecta = false;
        }
    } else {
        cedulaCorrecta = false;
    }
    this.validador= cedulaCorrecta;
  }

  regC(values:any):void{
    let cli :Cliente
    cli = {cedula:"cedula", nombres:"nombres", apellidos:"apellidos", correo:"correo", direccion:"direccion", telefono:"telefono"}
    let c = new URLSearchParams()
    c.set(cli.cedula, this.formularioC.value.cedula)
    c.set(cli.nombres, this.formularioC.value.nombres)
    c.set(cli.apellidos, this.formularioC.value.apellidos)
    c.set(cli.correo, this.formularioC.value.correo)
    c.set(cli.direccion, this.formularioC.value.direccion)
    c.set(cli.telefono, this.formularioC.value.telefono)

    this.Ws.addCliente(c).subscribe((res:any) => {
      alert(res['estado'])
      this.formularioC.reset()
    })
  }
}
