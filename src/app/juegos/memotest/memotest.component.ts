import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pais } from 'src/app/clases/pais';
import { Score } from 'src/app/clases/score';
import { PaisesServiceService } from 'src/app/services/paises.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  estado="0";
  grilla=[[]];
  public paises:Pais[]=[];
  pares = [];
  public puntaje = 0;
  public jugador;
  public ganador;
  public resultado;
  public mensaje;
  public movimientos =0;
  public score:Score = new Score();
  public date = new Date();
  elementos = [
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false },
    { iconSrc: 'heart', seleccionada: false },
    { iconSrc: 'car', seleccionada: false },
    { iconSrc: 'book', seleccionada: false },
    { iconSrc: 'apple', seleccionada: false },
    { iconSrc: 'bell', seleccionada: false },
    { iconSrc: 'bicycle', seleccionada: false },
    { iconSrc: 'bomb', seleccionada: false },
    { iconSrc: 'bolt', seleccionada: false }
  ];

  constructor(private paisesSrvc:PaisesServiceService, private scoreSvc:ScoreService) {
    this.score.name=localStorage.getItem('token');
    this.score.juego="memotest";
    this.score.fecha=this.date.getDate().toString() + '/' + this.date.getMonth().toString();
   }

  ngOnInit(): void {
    this.paisesSrvc.getAllPaises()
        .subscribe((resp: Pais[]) => {
            this.paises = resp;
            console.log(this.paises);
        });

        this.iniciarGrilla();
        
  }

  iniciarGrilla(): void {
    // desordeno
    this.elementos = this.elementos

      .sort(() => Math.random() - 0.5);
    // inserto elementos
    let count = 0;
    for (let i = 0; i < 4; i++) {
      this.grilla[i] = [];
      for (let j = 0; j < 4; j++) {
        this.grilla[i][j] = this.elementos[count];
        count++;
      }
    }
  }

  elegirCelda(celda): any {
    if (celda.seleccionada) {
      return;
    }

    celda.seleccionada = true;
    if (this.pares.length < 2) {
      this.pares.push(celda);
    }

    if (this.pares.length === 2) {
      // evaluo si se queda destapada
      let pares = this.pares;
      this.pares = [];
      if (pares[0].iconSrc !== pares[1].iconSrc) {
        setTimeout(() => {
          pares[0].seleccionada = false;
          pares[1].seleccionada = false;
          pares = [];
        }, 1000);

      }
      this.movimientos++;
      // evaluo si ya gano
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.grilla.length; index++) {

        if (this.grilla[index].some((x) => {
          return !x.seleccionada;
        })) {
          return;
        }
      }
      this.score.score=this.movimientos.toString() + ' turnos';
      this.scoreSvc.Crear(this.score);
      this.ganador = "jugador";
      this.puntaje = 10;
      this.mensaje = 'GANASTE!!!';
    }
  }

  reiniciarJuego(){
    this.elementos.map(p => {
      p.seleccionada=false;
    })
    this.iniciarGrilla();
    this.ganador="";
    this.estado='1';
    this.movimientos=0;
  }


  
}
