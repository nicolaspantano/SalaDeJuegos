import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { } from '@angular/fire'
import { Mensaje } from '../clases/mensaje';
@Injectable({
  providedIn: 'root'
})
export class MensajeRealService {

  
  
  referenciaColeccion :  AngularFireList<Mensaje>;
  
  constructor(private db:AngularFireDatabase) {
   }

   iniciarConexion(ruta:string){
    this.referenciaColeccion = this.db.list(ruta);
    
   }
   Crear(mensaje:Mensaje,ruta:string):any
   {
     //return this.referenciaColeccion.push(mensaje);
     return this.db.list(ruta).push(mensaje);
   }
 
   ObtenerTodos(ruta:string):any
   {
     return this.db.list(ruta);
   }
}
