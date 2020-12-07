import { Component  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  idx: number;
  casa: string;

  constructor( private activateRoute: ActivatedRoute,
               private heroesservice: HeroesService) {
    this.activateRoute.params.subscribe( params => {

      this.idx = params.id;
      this.heroe = this.heroesservice.getHeroe( this.idx );

      if (this.heroe.casa === 'Marvel'){
        this.casa = 'assets/img/Marvel.png';
      } else {
        this.casa = 'assets/img/DC.svg.png';
      }
    });
  }

}
