import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
const routes: Routes = [
  {path:'',component:HomeComponent,canActivate : [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'juegos',loadChildren: ()=>(import('./juegos/juegos-routing.module').then(m => m.IngresoRoutingModule)),canActivate : [AuthGuard]},
  {path:'quiensoy',component:QuiensoyComponent, canActivate : [AuthGuard]},
  {path:'chat',component:ChatComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
