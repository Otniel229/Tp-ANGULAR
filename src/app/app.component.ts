import { Component } from '@angular/core';
import { EachMealComponent } from './each-meal/each-meal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarousselComponent } from './caroussel/caroussel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EachMealComponent ,NavbarComponent, CarousselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
