import { Component, OnInit } from '@angular/core';

import { JuegoTateti } from '../../clases/juego-ta-te-ti';
@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {

  lugares = ['','','','','','','','',''];

  turnoActual="usuario";
  random:any;
  nombreJugador : string ='';
  nuevoJuego:JuegoTateti;
  botonesEleccion : boolean = false;
  botonesJuego : boolean = true;
  ganador:string ='';
  usuario = "-";
  maquina = "-";
  terminoJuego : boolean =false;
  band : boolean =false;
  
  constructor() {
    this.nuevoJuego = new JuegoTateti();
   }

  ngOnInit(): void {
    
  }

  eleccionSigno (signo:string){
    this.botonesEleccion = true;
    this.botonesJuego = false;
    if (signo == "X") {
      this.usuario = "X";
      this.maquina = "O";
    }
    else {
      this.usuario = "O";
      this.maquina = "X";
    }

  }

  HacerJugada(idx: number){

    
  }


  maquinamov()
  {
    
        this.nuevoJuego.resultado = this.nuevoJuego.signo(this.usuario, "jugador");
    
        if (this.nuevoJuego.resultado == "Gano" || this.nuevoJuego.resultado == "Perdio" || this.nuevoJuego.resultado == "Empate")
        {
          this.band = true;
          (<HTMLInputElement>document.getElementById("botonUno")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonDos")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonTres")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonCuatro")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonCinco")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonSeis")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonSiete")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonOcho")).disabled = true;
          (<HTMLInputElement>document.getElementById("botonNueve")).disabled = true;
          this.terminoJuego = false;
          /*this.servicio.getAuth().subscribe( user =>{
            let mail = user.email;      
            let splitted = mail.split("@",1);
            this.nuevoJuego.usuario = splitted[0];
          });*/
          //this.servicio.guardarPuntuaciónTateti(this.nuevoJuego);
        }
        else
          this.jugar();
    
  }

  jugar() 
      {
        this.random = Math.floor(Math.random() * 8);
        if (this.nuevoJuego.lugares[this.random] == "") {
          this.nuevoJuego.lugares[this.random] = this.maquina;
    
          this.nuevoJuego.resultado = this.nuevoJuego.signo(this.maquina, "maquina");
    
          console.log(this.nuevoJuego.resultado);

          if (this.nuevoJuego.resultado == "Gano" || this.nuevoJuego.resultado == "Perdio" || this.nuevoJuego.resultado == "Empate")
          {
            console.log(this.nuevoJuego.resultado);
              this.band = true;
              (<HTMLInputElement>document.getElementById("botonUno")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonDos")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonTres")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonCuatro")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonCinco")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonSeis")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonSiete")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonOcho")).disabled = true;
              (<HTMLInputElement>document.getElementById("botonNueve")).disabled = true;
              this.terminoJuego = false;
              /*this.servicio.getAuth().subscribe( user =>{
                let mail = user.email;      
                let splitted = mail.split("@",1);
                this.nuevoJuego.usuario = splitted[0];
              });
              this.servicio.guardarPuntuaciónTateti(this.nuevoJuego);*/
          }  
        }
        else {
          this.jugar();
        }
      }

      modificar(id:any){
        /*if (this.nuevoJuego.lugares[id] == '-') {
          this.nuevoJuego.lugares[id] = this.usuario;
          
          document.images[id].src = "assets/images/" + this.usuario + ".gif";
          //document.images['rc' + id].alt = this.usuario;
    
          this.maquinamov();

        }*/
        if(this.lugares[id]==''){
          if(this.turnoActual=='usuario'){
            this.lugares[id]=this.usuario;
            this.turnoActual='maquina';
  
          }
          else{
            this.lugares[id]=this.maquina;
            this.turnoActual="usuario";
            
          }
          this.maquinamov();
        }
        

        
        
      }

      reiniciarJuego(){

      }
}
