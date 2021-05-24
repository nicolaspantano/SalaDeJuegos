import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './ta-te-ti/ta-te-ti.component';

import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { MemotestComponent } from './memotest/memotest.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from '../components/chat/chat.component';



@NgModule({
  declarations: [PiedraPapelTijeraComponent, TaTeTiComponent, MayormenorComponent, MemotestComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ChatComponent
  ]
})
export class JuegosModule { }
