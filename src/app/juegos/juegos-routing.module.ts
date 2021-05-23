import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './memotest/memotest.component'
const routes: Routes = [
    {path:'piedra-papel-tijera',component:PiedraPapelTijeraComponent},
    {path:'ta-te-ti',component:TaTeTiComponent},
    {path:'mayormenor',component:MayormenorComponent},
    {path:'memotest',component:MemotestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoRoutingModule { }
