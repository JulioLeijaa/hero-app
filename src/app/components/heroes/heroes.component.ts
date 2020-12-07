import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesservice: HeroesService,
               private router: Router ) {}

  ngOnInit(): void {
    this.heroes = this.heroesservice.getHeroes();
  }

  verHeroe( idx: number): void{
    this.router.navigate( ['/heroe', idx]);
  }

}
