import { Component, OnInit, ViewChild, ViewChildren, Input, QueryList, ElementRef } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { Observable }from 'rxjs';

import { Router } from '@angular/router';
import { TatetichatService } from 'src/app/services/tatetichat.service';
@Component({
  selector: 'app-tatetichat',
  templateUrl: './tatetichat.component.html',
  styleUrls: ['./tatetichat.component.css']
})
export class TatetichatComponent implements OnInit {

  @ViewChild('scrollframe',{static:false}) scrollframe: ElementRef;
  @ViewChildren('item') itemElements:QueryList<any>;
  @Input() ruta:string;
  mensaje:Mensaje;
  mensajes = new Array<Mensaje>();

  item$:Observable<any[]>;
  token:any;

  date = new Date();

  private scrollContainer:any;

  usuarioActual=localStorage.getItem("token");
  constructor(private mensajeSvc:TatetichatService,private router:Router) {
    this.mensaje= new Mensaje();
    this.item$ = this.mensajeSvc.ObtenerTodos().valueChanges();
    this.mensaje.usuario=localStorage.getItem('token');
    this.mensaje.hora = this.date.getHours() + ':' + this.date.getMinutes();
   }

 

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

  }

  Enviar(){
    this.mensajeSvc.Crear(this.mensaje).then(()=>{
      this.mensaje.mensaje='';
    })
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollframe.nativeElement;  
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    
  }

  private onItemElementsChanged(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
