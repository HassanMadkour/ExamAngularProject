import { Routes } from '@angular/router';
import { ExamForm } from './Pages/exam-form/exam-form';
import { ExamList } from './Pages/exam-list/exam-list';
import { ExamQuestions } from './Pages/exam-questions/exam-questions';
import { AddQuestion } from './Pages/add-question/add-question';
import { UpdateQuestion } from './Pages/update-question/update-question';

export const routes: Routes = [
    {path:"examform",component:ExamForm},
    { path: "examform/:id", component: ExamForm },
    {path:'examlist',component:ExamList}
    , {
        path : "exam/:id/questions",component: ExamQuestions
    }, {
        path : "exam/:id/questions/create",component: AddQuestion
    },{
        path : "exam/:id/questions/update/:questionId",component: UpdateQuestion
    }
];
