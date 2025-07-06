import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./Components/nav-bar/nav-bar";
import { Home } from './Pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ExamAngularProject';
}
