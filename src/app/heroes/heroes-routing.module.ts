import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../heroes/pages/layout-page/layout-page.component';

//DEFINIMOS LAS RUTAS PRINCIPALES
const routes: Routes = [
  {path:'',
    component:LayoutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
