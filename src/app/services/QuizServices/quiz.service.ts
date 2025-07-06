import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuizQuestion } from '../../Models/quiz-question';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor() {}

  getQuizQuestions(): Observable<QuizQuestion[]> {
    const questions: QuizQuestion[] = [
      {
        id: 1,
        text: 'What is the capital of France?',
        correctAnswer: 'Paris',
        options: ['Paris', 'London', 'Berlin']
      },
      {
        id: 2,
        text: 'What is 5 + 3?',
        correctAnswer: '8',
        options: ['6', '8', '10']
      },
      {
        id: 3,
        text: 'Which language runs in a web browser?',
        correctAnswer: 'JavaScript',
        options: ['Python', 'C++', 'JavaScript']
      }
    ];

    return of(questions);
  }
}
