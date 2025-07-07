import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./layout/footer/footer";
import { NavBar } from "./layout/nav-bar/nav-bar";
import { Quizprocess } from "./Pages/quiz-process/quizprocess";

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, Footer, NavBar, Quizprocess],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ExamAngularProject';
}
