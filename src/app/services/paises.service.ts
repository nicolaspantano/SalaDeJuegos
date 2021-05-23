import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public url;

  constructor(public http:HttpClient) {
    this.url="https://restcountries.eu/rest/v2/region/americas";
   }
}
