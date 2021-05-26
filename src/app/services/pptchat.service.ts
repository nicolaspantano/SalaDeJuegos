import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class PptchatService {

  ruta="/ppt";
  
  referenciaColeccion :  AngularFireList<Mensaje>;
  
  constructor(private db:AngularFireDatabase) {
    this.referenciaColeccion = db.list(this.ruta);
   }
   Crear(mensaje:Mensaje):any
   {
    return this.referenciaColeccion.push(mensaje);
   }
 
   ObtenerTodos():AngularFireList<Mensaje>
   {
     return this.referenciaColeccion;
     
   }
}
