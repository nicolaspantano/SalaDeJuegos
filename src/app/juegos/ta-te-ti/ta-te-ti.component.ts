
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
  divDisabled:boolean=false;
  finJuego=false;
  estado="0";
  
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
    
    var random = Math.floor(Math.random()*8);
    console.log("random",random);
    if(this.lugares[random]==''){
      this.modificar(random);

      
      
    }
    else{
      
      this.maquinamov();

    }
    
    

    
  }

  
      modificar(id:any){
        
        if(this.lugares[id]=='' && this.finJuego==false){
          if(this.turnoActual=='usuario'){
            this.lugares[id]=this.usuario;
            this.turnoActual='maquina';
            var vacios = this.lugares.filter(lugar => lugar == '');      
            
            if(vacios.length!=0) {
              this.maquinamov();
            }  
                   
          }
          else{
            this.lugares[id]=this.maquina;
            this.turnoActual="usuario";
            
          }
          
        }
        this.comprobarGanador();
        
      }

      reiniciarJuego(){
        this.lugares = ['','','','','','','','',''];
        this.estado="0";
        this.ganador="";
        this.finJuego=false;
      }

      comprobarGanador(){

        let ganador;

        if (this.lugares[0] == this.lugares[1] && this.lugares[1] == this.lugares[2] && this.lugares[0]!='') {
          if (this.lugares[0] == this.usuario) {
              ganador = "usuario";
          }else{
            ganador = "maquina";
          }

      }
      else if (this.lugares[3] == this.lugares[4]   && this.lugares[4] == this.lugares[5]&& this.lugares[5]!='') {
        if (this.lugares[3] == this.usuario) {
          ganador = "usuario";
        }else{
        ganador = "maquina";
        }
      }
      else if (this.lugares[6] ==  this.lugares[7] && this.lugares[7] == this.lugares[8] && this.lugares[8]!='') {
        if (this.lugares[6] == this.usuario) {
          ganador = "usuario";
        }else{
        ganador = "maquina";

        }
      }
      else if (this.lugares[0] == this.lugares[3] &&  this.lugares[6] == this.lugares[3]&& this.lugares[3]!='') {
        if (this.lugares[0] == this.usuario) {
          ganador = "usuario";
        }else{
        ganador = "maquina";

        }

      }
      else if (this.lugares[1] == this.lugares[4] &&  this.lugares[7] == this.lugares[4]&& this.lugares[4]!='') {
        if (this.lugares[1] == this.usuario) {
          ganador = "usuario";
        }else{
        ganador = "maquina";

        }

      }
      else if (this.lugares[2] == this.lugares[5] &&  this.lugares[5] == this.lugares[8]&& this.lugares[5]!='') {
        if (this.lugares[2] == this.usuario) {
          ganador = "usuario";
        }else{
        ganador = "maquina";

        }

      }
      else if (this.lugares[0] == this.lugares[4] &&  this.lugares[4] == this.lugares[8]&& this.lugares[8]!='') {
        if (this.lugares[0] == this.usuario) {
          ganador = "usuario";
        }else{
        ganador = "maquina";

        }

      }
      else if (this.lugares[2] == this.lugares[4] &&  this.lugares[4] == this.lugares[6]&& this.lugares[6]!='') {
        if (this.lugares[2] == this.usuario) {
          ganador = "usuario";
        }else{
        ganador = "maquina";

        }

      }

      if(!ganador){
        var vacios = this.lugares.filter(lugar => lugar == '');      
            
      
        if(vacios.length==0) {
          ganador="Empate"
        } 
      }
      

      if(ganador){
        this.TerminarJuego(ganador);
      }

      
    }

      TerminarJuego(ganador:string){
        this.ganador=ganador;
        this.finJuego=true;
      }
}
