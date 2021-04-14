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

  constructor(private fireRealService:MensajeRealService) {
    this.mensaje= new Mensaje();
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
