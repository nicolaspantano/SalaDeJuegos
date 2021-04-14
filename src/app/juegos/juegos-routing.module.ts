import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './ta-te-ti/ta-te-ti.component';

const routes: Routes = [
    {path:'piedra-papel-tijera',component:PiedraPapelTijeraComponent},
    {path:'ta-te-ti',component:TaTeTiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoRoutingModule { }
