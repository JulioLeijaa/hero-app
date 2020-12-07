import { Component, OnInit } from '@angular/core';
import {  HeroesService, Heroe } from '../../../servicios/heroes.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroe: Heroe[] = [];
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;

  constructor( private heroesservice: HeroesService,
               private router: Router ){ }

  ngOnInit(): void{

  }

  buscarHeroe( termino: string): void{
    this.heroe = this.heroesservice.buscarHeroes(termino);
    this.router.navigate(['/navheroe', termino]);

    // this.nombre = this.heroes[0].nombre;
    // this.bio = this.heroes[0].bio;
    // this.img = this.heroes[0].img;
    // this.aparicion = this.heroes[0].aparicion;
    // this.casa = this.heroes[0].casa;

    // this.router.navigate(['/navheroe',
    //                       this.nombre,
    //                       this.bio,
    //                       this.img,
    //                       this.aparicion,
    //                       this.casa]);
  }
}
