import { Component, OnInit, ViewChild, ViewChildren, Input, QueryList, ElementRef } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { Observable }from 'rxjs';

import { Router } from '@angular/router';
import { PptchatService } from 'src/app/services/pptchat.service';
@Component({
  selector: 'app-pptchat',
  templateUrl: './pptchat.component.html',
  styleUrls: ['./pptchat.component.css']
})
export class PptchatComponent implements OnInit {

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
  constructor(private mensajeSvc:PptchatService,private router:Router) {
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
