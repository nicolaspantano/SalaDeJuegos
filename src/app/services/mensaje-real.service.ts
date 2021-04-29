import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { } from '@angular/fire'
import { Mensaje } from '../clases/mensaje';
@Injectable({
  providedIn: 'root'
})
export class MensajeRealService {

  @Input() rutaColeccion : string ="/trash";
  
  referenciaColeccion :  AngularFireList<Mensaje>;
  
  constructor(private db:AngularFireDatabase) {
    this.referenciaColeccion = db.list(this.rutaColeccion);
   }

   CrearUno(mensaje:Mensaje):any{
     return this.referenciaColeccion.push(mensaje);
   }

   TraerTodos(){
     
   }
}
