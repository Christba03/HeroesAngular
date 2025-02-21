import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage',
  standalone: false
})
export class HeroImagePipe implements PipeTransform {
  //Metodo que se ejecuta al  usar el pipe en una plantilla, recibe un objeto Hero

  transform(hero: Hero): string {
    if (!hero.id && !hero.alt_img){
      return 'images/no-image.png';
    }
    if (hero.alt_img) return hero.alt_img;
      return `images/heroes/${hero.id}.jpg`;
    
  }

}
