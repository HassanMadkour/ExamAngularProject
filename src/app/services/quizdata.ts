import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizModel } from '../Models/quiz-model';
import { AccountService } from '../Components/services/account-service';
import { CompletedExam } from '../Models/completed-exam';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
    constructor(
    private http: HttpClient,
    private AccountService: AccountService
  ) {}
  private baseUrl: string = 'https://localhost:7085/api/';
  private notLoggedInUrl: string = this.baseUrl + 'exam';
  private loggedInUrl: string = this.baseUrl + 'Student/exams/';
  private passedExamsUrl = this.baseUrl + 'Student/';
getCompletedExamsById(examId: string): Observable<CompletedExam> {
  const token = localStorage.getItem('token');
  const userId = this.AccountService.getUserIdFromToken();

  if (token && userId) {
    return this.http.get<CompletedExam>(
      `${this.passedExamsUrl}${userId}/PassedExams/${examId}`
    );
  } else {
    throw new Error('User is not logged in');
  }
}

 getCompletedExams(): Observable<QuizModel[]> {
    const token = localStorage.getItem('token');
    const userId = this.AccountService.getUserIdFromToken();

    if (token && userId) {
      return this.http.get<QuizModel[]>(`${this.passedExamsUrl}${userId}/PassedExams`);
    } else {
      throw new Error('User is not logged in');
    }
  }
  getQuizzes(): Observable<QuizModel[]> {
const token = localStorage.getItem('token');
    const userId = this.AccountService.getUserIdFromToken();
          return this.http.get<QuizModel[]>(this.notLoggedInUrl);


    // if (token && userId) {
    //   return this.http.get<QuizModel[]>(`${this.loggedInUrl}${userId}`);
    // } else {
    //   return this.http.get<QuizModel[]>(this.notLoggedInUrl);
    // }
  }
}
