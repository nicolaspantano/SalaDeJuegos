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
    this.numerosJugados.push(this.numerosRandom.shift()||-1); 
  }


  jugar(eleccion:string){
    let numero = this.numerosRandom.shift()||-1;
    if(numero>=0||numero<=50){
      this.numerosJugados.push(this.numerosRandom.shift()||-1);
      console.log(this.numerosJugados);
    }
    else{
     this.estado="2";
     console.log(numero);
     this.ganador="jugador";
      
    }
   
  }
}



