import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path:'auth', //ruta padre de autenticacion
    loadChildren:() => import ('./auth/auth.module').then(m => m.AuthModule),
    //lazy loading carga el modulo de autenitcaion solo cuando se accede a auth
  },
  {
    path:'heroes', //ruta padre de autenticacion
    loadChildren:() => import ('./heroes/heroes.module').then(m => m.HeroesModule),
    //lazy loading carga el modulo de autenitcaion solo cuando se accede a auth
  },
  {
    path:'404', //ruta para la pagina de error 404
    component: Error404PageComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
