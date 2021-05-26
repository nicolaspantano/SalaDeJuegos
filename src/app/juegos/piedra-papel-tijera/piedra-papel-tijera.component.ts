import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/clases/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  resultado='';
  estado='0';
  eleccionUsuario='';
  eleccionMaquina='';
  srcImagenElegida='';
  score:Score = new Score();
  date:Date = new Date();
  constructor(private scoreSvc:ScoreService) {
    this.score.juego="ppt";
    this.score.name=localStorage.getItem('token');
    this.score.fecha = this.date.getDate().toString() + '/' + this.date.getMonth().toString();
   }

  ngOnInit(): void {
  
  }

  Jugar(eleccionUsuario:string){
    this.eleccionUsuario=eleccionUsuario;
    var random = Math.random();
    
    if(random<=0.33){
      this.eleccionMaquina='piedra';     
    }
    else if(random>=0.66){
      this.eleccionMaquina='papel';
    }
    else{
      this.eleccionMaquina='tijera';
    }
    console.log('Usuario: ',eleccionUsuario);
    console.log('Maquina: ',this.eleccionMaquina);
    this.resultado = this.Comparar(eleccionUsuario,this.eleccionMaquina);
    this.estado='2';
    
      
    

  }

  Comparar(usuario:string,maquina:string):string{
    var resultado='';
    if(usuario=='piedra'){
      if(maquina=='papel'){
        resultado='4';
        this.score.score="Derrota";
      }else if(maquina=='piedra'){
        resultado='3';
        this.score.score="Empate";

      }
      else{
        resultado='2';
        this.score.score="Victoria";

      }
    }else if(usuario=='papel'){
      if(maquina=='tijera'){
        resultado='4';
        this.score.score="Derrota";

      }else if(maquina=='papel'){
        resultado='3';
        this.score.score="Empate";

      }
      else{
        resultado='2';
        this.score.score="Victoria";

      }
    }else if(usuario=='tijera'){
      if(maquina=='piedra'){
        resultado='4';
        this.score.score="Derrota";

      }else if(maquina=='tijera'){
        this.score.score="Empate";

        resultado='3';
      }
      else{
        resultado='2';
        this.score.score="Victoria";

      }
    }
    this.scoreSvc.Crear(this.score);
    return resultado;
  }
}
