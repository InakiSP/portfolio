import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { AboutMe } from "./components/about-me/about-me";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'front';
}
