import { ChangeDetectorRef, Component } from '@angular/core';
import { QuizService } from '../../Services/quizdata';
import { AccountService } from '../../Components/services/account-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
completedExams: any[] = [];

  constructor(
    private quizService: QuizService,
    public accountService: AccountService, 
    private router: Router ,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.accountService.isLoggedIn()) {
      this.quizService.getCompletedExams().subscribe({
        next: (data) =>
           {
            this.completedExams = data 
            this.cdr.detectChanges(); // Ensure the view updates with the new data
            console.log(data);
          },
        
        error: (err) => console.error('Error fetching exams:', err),
      });
    }
  }

  openCompletedExam(examId: number): void {
    this.router.navigate(['/completed-exam', examId]);
  }
}

