import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { WsJeeService } from 'src/app/services/ws-jee.service';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.component.html',
  styleUrls: ['./registrocliente.component.css']
})
export class RegistroclienteComponent implements OnInit {
  public Cliente:Observable<Cliente>

  constructor(private Ws : WsJeeService) { }

  ngOnInit(): void {
  
  }
  regC():void{
    let cli :Cliente
    cli = {cedula:"cedula", nombres:"nombres", apellidos:"apellidos", correo:"correo", direccion:"direccion", telefono:"telefono"}
    let c = new URLSearchParams()
    //c.set(cli.cedula, "01022555")
    c.set(cli.cedula, "01485354684")
    c.set(cli.nombres, "dsds")
    c.set(cli.apellidos, "dsds")
    c.set(cli.correo, "dsds")
    c.set(cli.direccion, "dsds")
    c.set(cli.telefono, "dsds")
    /*c.set("cedula", "0105554468"),
    c.set("nombres", "sdssdss"),
    c.set("apellidos", "5sddssa"),
    c.set("correo", "sdsds"),
    c.set("direccion", "sdssds"),
    c.set("telefono", "54554")
    console.log(cli.cedula)*/

  
    //console.log(c)
    this.Ws.addCliente(c).subscribe((res) => {
      console.log("OE>>>>>>>> ",res)
    })
  }

}
