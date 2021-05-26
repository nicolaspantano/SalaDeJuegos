import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Score } from '../clases/score';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  rutaDeLaColeccion = '/scores';
  referenciaAlaColeccion: AngularFirestoreCollection<Score>;
  referenciaBd: AngularFirestore;

  constructor(private bd:AngularFirestore) { 
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }


  Crear(score:Score){
    this.referenciaAlaColeccion.add({...score});
  }

  getScores(juego:string){
    
    return this.referenciaBd.collection(this.rutaDeLaColeccion, ref => ref.where("juego", "==", juego));
  }

}
