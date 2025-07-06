import { Routes } from '@angular/router';
import { Quizprocess } from './pages/quiz-process/quizprocess';
import { QuizView } from './views/quiz-view/quiz-view';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { AllQuizzes } from './componants/all-quizzes/all-quizzes';

export const routes: Routes = [
  {path:'',component:Home},
  {path:'quizScreen',component:QuizView},
  {path: 'quizzes/all',component: AllQuizzes},
  {path:'*',component:NotFound}
];
