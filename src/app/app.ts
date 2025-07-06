import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./layout/nav-bar/nav-bar";
import { Home } from "./pages/home/home";
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ExamAngularProject';
}
