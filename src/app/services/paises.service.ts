import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../clases/pais'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private url="https://restcountries.eu/rest/v2/region/americas"
  paises : Pais[] = [];
  constructor(private http:HttpClient) { }

  getAllPaises(){
    return this.http.get(this.url);
  }

  crearArrDePaises(paisesObj: Object) {
    const paises: Pais[] = [];

    if (paisesObj === null)
        return [];

    Object.keys(paisesObj).forEach(key => {
        const pais: Pais = paisesObj[key];
        pais.id = key;

        paises.push(pais);
    })

    return paises;
}
}
