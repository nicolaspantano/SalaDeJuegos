import { Component, OnInit } from '@angular/core';
import { MensajeRealService } from '../../services/mensaje-real.service';
import { Mensaje } from '../../clases/mensaje';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensaje:Mensaje;
  mensajes = new Array<Mensaje>();
  usuarioActual=localStorage.getItem("user");
  constructor(private fireRealService:MensajeRealService) {
    this.mensaje= new Mensaje();
    this.mensajes = [{id:'1',usuario:'prueba@hotmail.com',mensaje:'hola',estado:true},{id:'2',usuario:'prueba123@hotmail.com',mensaje:'chau',estado:true}]
   }

 

  ngOnInit(): void {
    
  }

  Enviar(){
    this.fireRealService.TraerTodos();
    /*
    this.mensaje.usuario=localStorage.getItem('user') || '';

    //Mensaje Real Service
    this.fireRealService.CrearUno(this.mensaje).then(()=>{
      console.log("Se envio el mensaje real");
    });*/
  }
}
