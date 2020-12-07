import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { NavheroeComponent } from './components/navheroe/navheroe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent},
  // { path: 'navheroe/:nombre/:bio/:img/:aparicion/:casa', component: NavheroeComponent},
  { path: 'navheroe/:termino', component: NavheroeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
