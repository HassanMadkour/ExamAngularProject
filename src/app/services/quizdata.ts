import { Injectable } from '@angular/core';

import { QuizModel } from '../models/quiz-model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizzes: QuizModel[] = [
    {
      title: 'Math',
      description: 'Sky was cloudless and of a deep dark blue spectacle before us was indeed',
      icon: 'assets/icons/math.png',
      bg: 'bg-light'
    },
    {
      title: 'English',
      description: 'Even the all-powerful Pointing has no control about the blind texts.',
      icon: 'assets/icons/english.png',
      bg: 'bg-light'
    },
    {
      title: 'Science',
      description: 'Unorthographic life One day however a small line of blind text.',
      icon: '',
      bg: 'bg-white'
    },
    {
      title: 'Bangla',
      description: 'However a small line of blind text by the name.',
      icon: 'assets/icons/bangla.png',
      bg: 'bg-light'
    },
    {
      title: 'General Knowledge',
      description: 'Text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      icon: 'assets/icons/general.png',
      bg: 'bg-white'
    },
     {
      title: 'Math',
      description: 'Sky was cloudless and of a deep dark blue spectacle before us was indeed',
      icon: 'assets/icons/math.png',
      bg: 'bg-light'
    },
    {
      title: 'English',
      description: 'Even the all-powerful Pointing has no control about the blind texts.',
      icon: 'assets/icons/english.png',
      bg: 'bg-light'
    },
    {
      title: 'Science',
      description: 'Unorthographic life One day however a small line of blind text.',
      icon: '',
      bg: 'bg-white'
    },
    {
      title: 'Bangla',
      description: 'However a small line of blind text by the name.',
      icon: 'assets/icons/bangla.png',
      bg: 'bg-light'
    },
    {
      title: 'General Knowledge',
      description: 'Text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      icon: 'assets/icons/general.png',
      bg: 'bg-white'
    },
     {
      title: 'Math',
      description: 'Sky was cloudless and of a deep dark blue spectacle before us was indeed',
      icon: 'assets/icons/math.png',
      bg: 'bg-light'
    },
    {
      title: 'English',
      description: 'Even the all-powerful Pointing has no control about the blind texts.',
      icon: 'assets/icons/english.png',
      bg: 'bg-light'
    },
    {
      title: 'Science',
      description: 'Unorthographic life One day however a small line of blind text.',
      icon: '',
      bg: 'bg-white'
    },
    {
      title: 'Bangla',
      description: 'However a small line of blind text by the name.',
      icon: 'assets/icons/bangla.png',
      bg: 'bg-light'
    },
    {
      title: 'General Knowledge',
      description: 'Text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
      icon: 'assets/icons/general.png',
      bg: 'bg-white'
    }
  ];

  getQuizzes(): QuizModel[] {
    return this.quizzes;
  }
}
