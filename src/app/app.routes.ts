import { Routes } from '@angular/router';
import { ExamForm } from './Pages/exam-form/exam-form';
import { ExamList } from './Components/exam-list/exam-list';

export const routes: Routes = [
    {path:"examform",component:ExamForm},
    { path: "examform/:id", component: ExamForm },
    {path:'examlist',component:ExamList}
];
