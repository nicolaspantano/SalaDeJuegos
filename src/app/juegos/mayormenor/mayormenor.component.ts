import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  estado="0";
  numeroActual = -1;
  numerosRandom : Array<number> = [];
  numerosJugados : Array <number> = [];
  ganador = '';
  constructor() { 
    for(let i =0;i<9;i++){
      let random = Math.floor(Math.random()*50);
      this.numerosRandom.push(random);
    }
    console.log(this.numerosRandom);
    
  }

  ngOnInit(): void {
    let primero = this.numerosRandom.shift()||-1; 
    this.numeroActual=primero;
    this.numerosJugados.push(primero); 
    
  }


  jugar(eleccion:string){

    console.log("numero actual 1 ", this.numeroActual);
    if(this.ganador==''){
      let numero = this.numerosRandom.shift()||-1;

    
      if(numero>=0&&numero<=50){
        if(eleccion=="mayor"){
          if(numero>this.numeroActual){
            console.log("paso por aca 1");
            this.numerosJugados.push(numero);
          }
          else{
            console.log("paso por aca 2");
            this.terminarJuego("maquina");
          }
        }
        
        if(eleccion=="menor"){
          if(numero<this.numeroActual){
            console.log("paso por aca 3");
            this.numerosJugados.push(numero);
          }
          else{
            console.log("paso por aca 4");
            this.terminarJuego("maquina");
          }
        }
        
        
  
      }
      else{
       this.terminarJuego("jugador");
        
      }

      console.log("numeros random",this.numerosRandom);
      this.numeroActual=numero;
      console.log("numero actual",this.numeroActual);


    }

   
  }

  terminarJuego(ganador:string){
    
    this.ganador=ganador;
    console.log("ganador", this.ganador);
  }
}



