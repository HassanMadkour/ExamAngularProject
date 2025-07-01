import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExamList } from "./Pages/exam-list/exam-list";
import { NavBar } from "./Components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ExamAngularProject';
}
