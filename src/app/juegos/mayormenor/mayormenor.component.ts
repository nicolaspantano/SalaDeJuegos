import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/clases/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  nombre="mayormenor";
  estado="0";
  numeroActual = -1;
  numerosRandom : Array<number> = [];
  numerosJugados : Array <number> = [];
  ganador = '';
  score=0;
  date = new Date();
  puntuacion:Score = new Score();
  constructor(private scoreSvc:ScoreService) { 
    
    this.puntuacion.juego="mayormenor";
    this.puntuacion.name=localStorage.getItem('token');
    this.puntuacion.fecha = this.date.getDate().toString() + '/' + this.date.getMonth().toString();
  }

  ngOnInit(): void {
    this.reiniciarJuego();
    console.log(this.numerosRandom);
    
  }


  jugar(eleccion:string){

    console.log("numero actual 1 ", this.numeroActual);
    if(this.ganador==''){
      let numero = this.numerosRandom.shift()||-1;

    
      if(numero>=0&&numero<=50){
        if(eleccion=="mayor"){
          if(numero>this.numeroActual){            
            this.numerosJugados.push(numero);
            this.score++;
          }
          else{
            this.numerosJugados.push(numero)
            this.terminarJuego("maquina");
          }
        }
        
        if(eleccion=="menor"){
          if(numero<this.numeroActual){
            this.score++;
            this.numerosJugados.push(numero);
          }
          else{
            this.numerosJugados.push(numero)
            this.terminarJuego("maquina");
          }
        }
        
        
  
      }
      if(this.numerosRandom.length==0){
       this.terminarJuego("jugador");
        
      }

      
      this.numeroActual=numero;
      


    }

   
  }

  terminarJuego(ganador:string){
    
    this.ganador=ganador;
    this.puntuacion.score=this.score.toString();
    this.scoreSvc.Crear(this.puntuacion);
    console.log("ganador", this.ganador);
   
  }
  

  reiniciarJuego(){
    this.numerosJugados=[];
    for(let i =0;i<9;i++){
      let random = Math.floor(Math.random()*50);
      while(this.numerosRandom.some(res => res == random)){
        random = Math.floor(Math.random()*50);
      }
      this.numerosRandom.push(random);
    }
    let primero = this.numerosRandom.shift()||-1; 
    this.numeroActual=primero;
    this.numerosJugados.push(primero); 
    this.score=0;
    this.ganador="";
    console.log(this.numerosRandom);
    
  }
}



