import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './ta-te-ti/ta-te-ti.component';
import { BoardComponent } from './ta-te-ti/board/board.component';
import { SquaresComponent } from './ta-te-ti/squares/squares.component';



@NgModule({
  declarations: [PiedraPapelTijeraComponent, TaTeTiComponent, BoardComponent, SquaresComponent],
  imports: [
    CommonModule
  ]
})
export class JuegosModule { }
