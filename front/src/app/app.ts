import { Component } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { AboutMe } from "./components/about-me/about-me";
import { Skills } from "./components/skills/skills";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, AboutMe, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'front';
}
