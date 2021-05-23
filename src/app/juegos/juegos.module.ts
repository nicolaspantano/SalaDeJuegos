import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './ta-te-ti/ta-te-ti.component';

import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { MemotestComponent } from './memotest/memotest.component';



@NgModule({
  declarations: [PiedraPapelTijeraComponent, TaTeTiComponent, MayormenorComponent, MemotestComponent],
  imports: [
    CommonModule
  ]
})
export class JuegosModule { }
