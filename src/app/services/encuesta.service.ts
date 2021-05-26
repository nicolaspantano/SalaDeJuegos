import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Encuesta } from '../clases/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  ruta="/encuesta";
  
  referenciaColeccion :  AngularFireList<Encuesta>;
  constructor(private db:AngularFireDatabase) {
    this.referenciaColeccion = db.list(this.ruta);
   }
   Crear(mensaje:Encuesta):any
   {
    return this.referenciaColeccion.push(mensaje);
   }
 
   ObtenerTodos():AngularFireList<Encuesta>
   {
     return this.referenciaColeccion;
     
   }
}
