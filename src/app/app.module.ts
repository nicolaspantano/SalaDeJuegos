import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/register/register.component';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PiedraPapelTijeraComponent } from './juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { ChatComponent } from './components/chat/chat.component';
import { TaTeTiComponent } from './juegos/ta-te-ti/ta-te-ti.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuiensoyComponent,
    RegisterComponent,
    PiedraPapelTijeraComponent,
    ChatComponent,
    TaTeTiComponent
 
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
    CommonModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
