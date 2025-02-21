import { Component, OnInit } from '@angular/core';
import {Hero} from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hero-page',
  standalone: false,
  templateUrl: './hero-page.component.html',
  styles: ``,
  styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent implements OnInit{
  public hero: Hero = {} as Hero;
    //Declara una variable publica que almacenara los datos del heroe seleccionado
  constructor(
    private heroesService: HeroesService, 
    //inyecta el servicio para obtener informacion del heroe
    private activatedRoute: ActivatedRoute,
    //INyecta ActividadRoute para acceder a los parametros de la URL
    private router: Router,
    //Inyecta Router para navegar entre rutas si el heroe no existe
  ) { }
  ngOnInit(): void {
    // Metodo que se ejecuta automaticamente al cargar el componente
    this.activatedRoute.params //obtiene parametros de la URL
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id)) 
      // TOma el Id del hero de la URL y lo pasa a getHero par obtener informacion
    )
    .subscribe(hero => {
      //Se suscribe al observable devuelto por el getHero y recibe el heroe encontrado
      if (!hero) return this.router.navigate(['/heroes/list']);
        //Si el heroe no existe navega a la lista de heroes
      this.hero = hero;
      //Si el heroe existe lo almacena en la variable hero
      console.log(hero);
      return;
    });
    

  }
  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }

}
