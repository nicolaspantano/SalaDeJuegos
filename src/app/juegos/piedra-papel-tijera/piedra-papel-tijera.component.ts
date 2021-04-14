import { Component, OnInit } from '@angular/core';

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
  constructor() { }

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
      }else if(maquina=='piedra'){
        resultado='3';
      }
      else{
        resultado='2';
      }
    }else if(usuario=='papel'){
      if(maquina=='tijera'){
        resultado='4';
      }else if(maquina=='papel'){
        resultado='3';
      }
      else{
        resultado='2';
      }
    }else if(usuario=='tijera'){
      if(maquina=='piedra'){
        resultado='4';
      }else if(maquina=='tijera'){
        resultado='3';
      }
      else{
        resultado='2';
      }
    }

    return resultado;
  }
}
