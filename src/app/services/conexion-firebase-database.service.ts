import { Injectable, Query } from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import {Usuario} from '../clases/usuario';
import {map} from 'rxjs/operators';


type CollectionPredicate<T> = string | AngularFirestoreCollection;

@Injectable({
  providedIn: 'root'
})
export class ConexionFirebaseDatabaseService {

  


  constructor(private bd:AngularFirestore) { 
    
  }

  private col<T>(ref:CollectionPredicate<T>,queryFn?:any):AngularFirestoreCollection{
    return typeof ref === "string" ? this.bd.collection(ref,queryFn):ref;
  }

  col$<T>(ref:CollectionPredicate<T>,queryFn?:any):Observable<any>{
    return this.col(ref,queryFn).snapshotChanges().pipe(
      map(docs=>{
        return docs.map(d => {
          const data = d.payload.doc.data();
          const id = d.payload.doc.id;
          return {id , ...data}
        })
      })
    )
  }


  add<T>(ref:CollectionPredicate<T>,data:any){
    let res;
    res = this.col(ref).add({...data});
    console.log(res);
    return  res;
  }

  listen(){
    const doc = this.bd.collection('chat').doc('mensajes');
    
  }


}
