import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-navheroe',
  templateUrl: './navheroe.component.html'
})
export class NavheroeComponent implements OnInit {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  termino: string;
  heroes: Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private heroesservice: HeroesService,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroesservice.buscarHeroes(params.termino);

      // this.nombre = params.nombre;
      // this.bio = params.bio;
      // this.img = params.img;
      // this.aparicion = params.aparicion;
      // this.casa = params.casa;
    });
  }

  verHeroe( idx: number): void{
    this.router.navigate( ['/heroe', idx]);
  }

}
