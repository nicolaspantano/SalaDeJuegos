import { Component, OnInit, Input, ViewChild,AfterViewInit,ViewChildren,QueryList,ElementRef } from '@angular/core';
import { MensajeRealService } from '../../services/mensaje-real.service';
import { Mensaje } from '../../clases/mensaje';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
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
    this.mensajes = [];
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
